import { JsonValue } from "type-fest";

export type Review = {
  createdAt: Date;
  id: string;
  images: JsonValue;
  rating: number | null;
  reviewedBy: string | null;
  reviewedCategory: string | null;
  reviewedEvent: string | null;
  text: string | null;
  updatedAt: Date;
};
