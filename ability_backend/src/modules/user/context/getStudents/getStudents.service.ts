import { Injectable } from '@nestjs/common';

import { PrismaService } from '@shared/prisma/prisma.service';

import { ListDto } from '@modules/user/dto';
import { User } from '@prisma/client';

@Injectable()
export class GetStudentsService {
  constructor(private prisma: PrismaService) {}

  async execute(
    params: ListDto.Query,
    loggedUser: User,
  ): Promise<any> {
    const findGroups = await this.prisma.userGroup.findMany(
      {
        where: {
          instructor: true,
          userId: loggedUser.id,
        },
        select: {
          group: true,
        },
      },
    );

    const selectedGroupIds = findGroups.map(
      (data) => data.group.id,
    );

    const items = await this.prisma.user.findMany({
      where: {
        deletedAt: { not: true },
        userGroup: {
          some: {
            groupId: { in: selectedGroupIds },
          },
        },
        profile: {
          slug: {
            equals: 'student',
          },
        },
        userMethod: {
          every: {
            main: {
              equals: true,
            },
          },
        },
      },
      select: {
        id: true,
        firstName: true,
        secondName: true,
        city: true,
        state: {
          select: {
            name: true,
            postal: true,
          },
        },
        userMethod: {
          select: {
            method: {
              select: {
                id: true,
                title: true,
                slug: true,
                instrument: {
                  select: {
                    name: true,
                    slug: true,
                  },
                },
              },
            },
          },
        },
      },
      take: 10,
      skip: 0,
    });

    return {
      totalItems: items.length,
      totalPage: Math.ceil(items.length / params.perPage),
      items,
    };
  }
}
