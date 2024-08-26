import { EventCreateNestedManyWithoutCategoriesInput } from "./EventCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  description?: string | null;
  events?: EventCreateNestedManyWithoutCategoriesInput;
  isActive?: boolean | null;
  name?: string | null;
};
