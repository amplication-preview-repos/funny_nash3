import { EventUpdateManyWithoutCategoriesInput } from "./EventUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  description?: string | null;
  events?: EventUpdateManyWithoutCategoriesInput;
  isActive?: boolean | null;
  name?: string | null;
};
