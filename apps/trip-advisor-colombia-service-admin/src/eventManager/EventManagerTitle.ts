import { EventManager as TEventManager } from "../api/eventManager/EventManager";

export const EVENTMANAGER_TITLE_FIELD = "name";

export const EventManagerTitle = (record: TEventManager): string => {
  return record.name?.toString() || String(record.id);
};
