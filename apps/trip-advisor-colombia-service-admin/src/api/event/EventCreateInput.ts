import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";

export type EventCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  city?: CityWhereUniqueInput | null;
  createdBy?: string | null;
  date?: Date | null;
  description?: string | null;
  location?: string | null;
  manager?: string | null;
  title?: string | null;
};
