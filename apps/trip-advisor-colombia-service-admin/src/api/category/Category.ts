import { Event } from "../event/Event";

export type Category = {
  createdAt: Date;
  description: string | null;
  events?: Array<Event>;
  id: string;
  isActive: boolean | null;
  name: string | null;
  updatedAt: Date;
};
