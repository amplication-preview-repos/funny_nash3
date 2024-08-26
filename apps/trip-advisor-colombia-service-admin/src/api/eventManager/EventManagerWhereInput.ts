import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type EventManagerWhereInput = {
  city?: CityWhereUniqueInput;
  contactInfo?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
};
