import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  images?: SortOrder;
  rating?: SortOrder;
  reviewedBy?: SortOrder;
  reviewedCategory?: SortOrder;
  reviewedEvent?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
