import {
  IsBoolean,
  IsEmpty,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class Body {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  urlImage?: string;

  @IsString()
  @IsEmpty()
  @IsOptional()
  instrumentId?: string | null;

  @IsBoolean()
  @IsOptional()
  main?: boolean;
}
