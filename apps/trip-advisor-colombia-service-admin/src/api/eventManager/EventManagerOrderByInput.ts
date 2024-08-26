import { SortOrder } from "../../util/SortOrder";

export type EventManagerOrderByInput = {
  cityId?: SortOrder;
  contactInfo?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
