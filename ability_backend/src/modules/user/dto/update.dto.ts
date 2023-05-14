import {
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  Matches,
  Validate,
} from 'class-validator';
import { Role } from '@prisma/client';
import { ONE_MAIN } from '@shared/helper/config/messages';
import { Methods, manyMain } from './default.dto';

export class Body {
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

  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @Validate(manyMain, {
    message: ONE_MAIN,
  })
  methods?: Methods[];
}
