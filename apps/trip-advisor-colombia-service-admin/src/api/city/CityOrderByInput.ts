import { SortOrder } from "../../util/SortOrder";

export type CityOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
