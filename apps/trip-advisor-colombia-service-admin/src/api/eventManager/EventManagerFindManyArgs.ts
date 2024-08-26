import { EventManagerWhereInput } from "./EventManagerWhereInput";
import { EventManagerOrderByInput } from "./EventManagerOrderByInput";

export type EventManagerFindManyArgs = {
  where?: EventManagerWhereInput;
  orderBy?: Array<EventManagerOrderByInput>;
  skip?: number;
  take?: number;
};
