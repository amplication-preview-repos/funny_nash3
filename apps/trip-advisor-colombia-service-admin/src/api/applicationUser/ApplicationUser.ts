export type ApplicationUser = {
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  role: string | null;
  updatedAt: Date;
  userRole?: "Option1" | null;
  username: string | null;
};
