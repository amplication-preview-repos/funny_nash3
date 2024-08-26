import { Review as TReview } from "../api/review/Review";

export const REVIEW_TITLE_FIELD = "reviewedBy";

export const ReviewTitle = (record: TReview): string => {
  return record.reviewedBy?.toString() || String(record.id);
};
