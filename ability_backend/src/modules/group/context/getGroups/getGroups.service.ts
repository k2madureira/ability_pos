import { Injectable } from '@nestjs/common';

import { PrismaService } from '@shared/prisma/prisma.service';
import { HelperService } from '@shared/helper/helper.service';
import { ListDto } from '@modules/group/dto';
import { Group } from '@prisma/client';

interface IGroupList extends Group {
  totalStudents?: number;
}
[];

@Injectable()
export class GetGroupsService {
  constructor(
    private prisma: PrismaService,
    private helper: HelperService,
  ) {}

  async execute(params: ListDto.Query): Promise<any> {
    const totalItems = await this.prisma.group.count({
      where: {
        deletedAt: {
          not: true,
        },
      },
    });

    const query = this.helper.queryBuild(params);

    const items: any = await this.prisma.group.findMany({
      ...query,
      include: {
        _count: true,
        groupUsers: {
          select: {
            user: {
              select: {
                id: true,
                firstName: true,
                city: true,
              },
            },
          },
        },
      },
    });

    const groups: IGroupList = items.map((group) => {
      const totalStudents = group._count.groupUsers;
      delete group._count;
      return {
        ...group,
        totalStudents,
      };
    });

    return {
      totalItems,
      totalPage: Math.ceil(totalItems / params.perPage),
      items: groups,
    };
  }
}
