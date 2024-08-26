import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EventWhereInput = {
  category?: CategoryWhereUniqueInput;
  city?: CityWhereUniqueInput;
  createdBy?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  manager?: StringNullableFilter;
  title?: StringNullableFilter;
};
