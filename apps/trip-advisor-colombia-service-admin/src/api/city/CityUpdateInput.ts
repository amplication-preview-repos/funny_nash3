import { EventManagerUpdateManyWithoutCitiesInput } from "./EventManagerUpdateManyWithoutCitiesInput";
import { EventUpdateManyWithoutCitiesInput } from "./EventUpdateManyWithoutCitiesInput";

export type CityUpdateInput = {
  description?: string | null;
  eventManagers?: EventManagerUpdateManyWithoutCitiesInput;
  events?: EventUpdateManyWithoutCitiesInput;
  isActive?: boolean | null;
  name?: string | null;
};
