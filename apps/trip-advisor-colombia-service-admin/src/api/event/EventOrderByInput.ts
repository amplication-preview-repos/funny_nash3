import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  categoryId?: SortOrder;
  cityId?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  manager?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
