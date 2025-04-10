import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
export class CreateProductDto {
  @ApiProperty({ example: 'name', required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  readonly name: string;

  @ApiProperty({ example: 'category', required: true })
  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @ApiProperty({ example: 'description', required: true })
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty({ example: 1, required: true })
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;
}
