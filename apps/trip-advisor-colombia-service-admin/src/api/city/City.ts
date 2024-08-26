import { EventManager } from "../eventManager/EventManager";
import { Event } from "../event/Event";

export type City = {
  createdAt: Date;
  description: string | null;
  eventManagers?: Array<EventManager>;
  events?: Array<Event>;
  id: string;
  isActive: boolean | null;
  name: string | null;
  updatedAt: Date;
};
