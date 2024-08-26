import { Category } from "../category/Category";
import { City } from "../city/City";

export type Event = {
  category?: Category | null;
  city?: City | null;
  createdAt: Date;
  createdBy: string | null;
  date: Date | null;
  description: string | null;
  id: string;
  location: string | null;
  manager: string | null;
  title: string | null;
  updatedAt: Date;
};
