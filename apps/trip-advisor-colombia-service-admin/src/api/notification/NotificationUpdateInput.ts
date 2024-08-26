import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  message?: string | null;
  typeField?: string | null;
  user?: UserWhereUniqueInput | null;
};
