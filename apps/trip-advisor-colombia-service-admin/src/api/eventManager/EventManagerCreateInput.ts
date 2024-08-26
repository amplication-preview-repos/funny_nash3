import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";

export type EventManagerCreateInput = {
  city?: CityWhereUniqueInput | null;
  contactInfo?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  typeField?: "Option1" | null;
};
