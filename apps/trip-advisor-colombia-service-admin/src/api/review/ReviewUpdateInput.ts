import { InputJsonValue } from "../../types";

export type ReviewUpdateInput = {
  images?: InputJsonValue;
  rating?: number | null;
  reviewedBy?: string | null;
  reviewedCategory?: string | null;
  reviewedEvent?: string | null;
  text?: string | null;
};
