import { City } from "../city/City";

export type EventManager = {
  city?: City | null;
  contactInfo: string | null;
  createdAt: Date;
  id: string;
  isActive: boolean | null;
  name: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
