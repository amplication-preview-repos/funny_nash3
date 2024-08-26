import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  message?: string | null;
  typeField?: string | null;
  user?: UserWhereUniqueInput | null;
};
