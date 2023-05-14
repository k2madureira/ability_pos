import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsString,
  IsUUID,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint()
export class manyMain
  implements ValidatorConstraintInterface
{
  public async validate(methods: Methods[]) {
    const count = methods.filter(
      (method) => method.main === true,
    ).length;

    return count === 1;
  }
}

export class Methods {
  @ApiProperty()
  @IsString()
  methodId: string;

  @ApiProperty()
  @IsBoolean()
  main: boolean;

  @ApiProperty()
  @IsString()
  lesson: string;
}

export class pathParameter {
  @ApiProperty()
  @IsUUID('all')
  @IsNotEmpty()
  id: string;
}

export class UserSchema {
  @ApiProperty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  secondName: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  urlImage: string;

  @ApiProperty()
  @IsString()
  tel: string;

  @ApiProperty()
  @IsString()
  role: string;

  @ApiProperty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  district: string;

  @ApiProperty()
  @IsString()
  zipCode: string;

  @ApiProperty()
  @IsString()
  createdAt: string;
}

export const userSchema = {
  id: true,
  firstName: true,
  secondName: true,
  email: true,
  hash: false,
  urlImage: true,
  tel: true,
  role: true,
  state: true,
  city: true,
  district: true,
  zipCode: true,
  createdAt: true,
};
