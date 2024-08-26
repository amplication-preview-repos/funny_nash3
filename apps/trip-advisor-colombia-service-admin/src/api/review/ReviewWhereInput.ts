import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ReviewWhereInput = {
  id?: StringFilter;
  images?: JsonFilter;
  rating?: IntNullableFilter;
  reviewedBy?: StringNullableFilter;
  reviewedCategory?: StringNullableFilter;
  reviewedEvent?: StringNullableFilter;
  text?: StringNullableFilter;
};
