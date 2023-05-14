import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '@shared/prisma/prisma.service';
import {
  ACCESS_DENIED,
  NOT_FOUND,
} from '@shared/helper/config/messages';

import {
  PERMISSIONS,
  METHODS,
  ADMIN_ROUTES,
  SUPER_ROLES,
} from '@shared/helper/config/constants';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const req = context.getArgByIndex(0);

    const user = req.user;
    const method: string = req.method.toLowerCase();
    const route: string = req.route.path;
    const params = req.params;
    const body = req.body;

    const selectedMethod =
      method === 'patch' ||
      method === 'put' ||
      method === 'delete'
        ? 'default'
        : method;
    if (
      METHODS.includes(method) &&
      route.includes('users')
    ) {
      if (params.id && user.id !== params.id) {
        const findUser = await this.prisma.user.findMany({
          where: {
            id: params.id,
            deletedAt: {
              not: true,
            },
          },
        });
        if (findUser.length === 0) {
          throw new NotFoundException(NOT_FOUND('user'));
        }
        if (
          PERMISSIONS[`${selectedMethod}`][
            `${user.role}`
          ].includes(findUser[0].role)
        ) {
          return true;
        } else {
          throw new UnauthorizedException(ACCESS_DENIED);
        }
      } else {
        if (
          body.role &&
          PERMISSIONS[`${selectedMethod}`][
            `${user.role}`
          ].includes(body.role)
        ) {
          return true;
        } else {
          throw new UnauthorizedException(ACCESS_DENIED);
        }
      }
    } else if (
      METHODS.includes(method) &&
      ADMIN_ROUTES.includes(route.split('/')[1]) &&
      !SUPER_ROLES.includes(user.role)
    ) {
      throw new UnauthorizedException(ACCESS_DENIED);
    }

    return true;
  }
}
