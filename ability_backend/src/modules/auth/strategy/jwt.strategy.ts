import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '@shared/prisma/prisma.service';

interface IPayload {
  sub: number;
  email: string;
}
@Injectable()
export class JwtStrategy extends PassportStrategy(
  Strategy,
  'jwt',
) {
  constructor(
    config: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest:
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: IPayload) {
    const users = await this.prisma.user.findMany({
      where: {
        email: payload.email,
        deletedAt: {
          not: true,
        },
      },
    });
    if (users.length === 0) {
      throw new UnauthorizedException(
        'invalid-bearer-token',
      );
    }
    const user = users[0];
    delete user.hash;

    return user;
  }
}
