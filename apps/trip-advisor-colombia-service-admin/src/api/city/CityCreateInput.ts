import { EventManagerCreateNestedManyWithoutCitiesInput } from "./EventManagerCreateNestedManyWithoutCitiesInput";
import { EventCreateNestedManyWithoutCitiesInput } from "./EventCreateNestedManyWithoutCitiesInput";

export type CityCreateInput = {
  description?: string | null;
  eventManagers?: EventManagerCreateNestedManyWithoutCitiesInput;
  events?: EventCreateNestedManyWithoutCitiesInput;
  isActive?: boolean | null;
  name?: string | null;
};
