import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EventManagerListRelationFilter } from "../eventManager/EventManagerListRelationFilter";
import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type CityWhereInput = {
  description?: StringNullableFilter;
  eventManagers?: EventManagerListRelationFilter;
  events?: EventListRelationFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  name?: StringNullableFilter;
};
