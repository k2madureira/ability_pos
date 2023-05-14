import { Role } from '@prisma/client';
import {
  Matches,
  IsEnum,
  IsEmail,
  IsIn,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class Query {
  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  secondName?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsString()
  @IsOptional()
  urlImage?: string;

  @IsString()
  @IsOptional()
  tel?: string;

  @IsOptional()
  @IsEnum(Role)
  @Matches(
    `^${Object.values(Role)
      .filter((v) => typeof v !== 'number')
      .join('|')}$`,
    'i',
  )
  role?: Role;

  @IsString()
  @IsOptional()
  state?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  district?: string;

  @IsString()
  @IsOptional()
  zipCode?: string;

  @IsString()
  @IsOptional()
  sortField?: string;

  @IsOptional()
  @IsIn(['asc', 'desc'])
  sortOrder?: 'asc' | 'desc';

  @IsInt()
  @IsOptional()
  page?: number = 1;

  @IsInt()
  @IsOptional()
  perPage?: number = 10;
}
