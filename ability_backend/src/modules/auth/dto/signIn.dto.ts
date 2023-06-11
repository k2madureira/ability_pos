import { ApiProperty } from '@nestjs/swagger';
import { Profile } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';

class AccessUser {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  profile: Profile;
}

export class Request {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class Response {
  @ApiProperty()
  @IsString()
  access_token: string;

  @ApiProperty()
  @Type(() => AccessUser)
  user?: AccessUser;
}
