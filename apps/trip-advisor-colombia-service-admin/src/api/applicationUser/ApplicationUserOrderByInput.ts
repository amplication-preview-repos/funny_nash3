import { SortOrder } from "../../util/SortOrder";

export type ApplicationUserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
  userRole?: SortOrder;
  username?: SortOrder;
};
