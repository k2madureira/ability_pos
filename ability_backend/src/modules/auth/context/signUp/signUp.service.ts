import { SignUp } from '@modules/auth/dto';
import * as argon from 'argon2';
import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '@shared/prisma/prisma.service';
import { CONFLICT } from '@shared/helper/config/messages';
import { User } from '@prisma/client';
import { DefaultDto } from '@modules/user/dto';

@Injectable()
export class SignUpService {
  constructor(private prisma: PrismaService) {}

  async execute(
    dto: SignUp.Request,
  ): Promise<Partial<User>> {
    const findUser = await this.prisma.user.findMany({
      where: {
        email: dto.email,
        deletedAt: {
          not: true,
        },
      },
    });

    if (findUser.length >= 1)
      throw new ConflictException(CONFLICT('user'));

    const hash = await argon.hash(dto.password);
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
        firstName: dto.firstName,
      },
      select: { ...DefaultDto.userSchema },
    });

    return user;
  }
}
