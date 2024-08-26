import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ApplicationUserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  role?: StringNullableFilter;
  userRole?: "Option1";
  username?: StringNullableFilter;
};
