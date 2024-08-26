/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CityWhereUniqueInput } from "./CityWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CityUpdateInput } from "./CityUpdateInput";

@ArgsType()
class UpdateCityArgs {
  @ApiProperty({
    required: true,
    type: () => CityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CityWhereUniqueInput)
  @Field(() => CityWhereUniqueInput, { nullable: false })
  where!: CityWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CityUpdateInput,
  })
  @ValidateNested()
  @Type(() => CityUpdateInput)
  @Field(() => CityUpdateInput, { nullable: false })
  data!: CityUpdateInput;
}

export { UpdateCityArgs as UpdateCityArgs };
