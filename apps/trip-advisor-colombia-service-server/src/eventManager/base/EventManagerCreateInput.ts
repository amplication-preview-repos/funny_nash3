/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CityWhereUniqueInput } from "../../city/base/CityWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsBoolean,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumEventManagerTypeField } from "./EnumEventManagerTypeField";

@InputType()
class EventManagerCreateInput {
  @ApiProperty({
    required: false,
    type: () => CityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CityWhereUniqueInput)
  @IsOptional()
  @Field(() => CityWhereUniqueInput, {
    nullable: true,
  })
  city?: CityWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  contactInfo?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumEventManagerTypeField,
  })
  @IsEnum(EnumEventManagerTypeField)
  @IsOptional()
  @Field(() => EnumEventManagerTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;
}

export { EventManagerCreateInput as EventManagerCreateInput };
