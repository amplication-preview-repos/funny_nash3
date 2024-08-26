/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ApplicationUser as PrismaApplicationUser,
} from "@prisma/client";

export class ApplicationUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ApplicationUserCountArgs, "select">
  ): Promise<number> {
    return this.prisma.applicationUser.count(args);
  }

  async applicationUsers(
    args: Prisma.ApplicationUserFindManyArgs
  ): Promise<PrismaApplicationUser[]> {
    return this.prisma.applicationUser.findMany(args);
  }
  async applicationUser(
    args: Prisma.ApplicationUserFindUniqueArgs
  ): Promise<PrismaApplicationUser | null> {
    return this.prisma.applicationUser.findUnique(args);
  }
  async createApplicationUser(
    args: Prisma.ApplicationUserCreateArgs
  ): Promise<PrismaApplicationUser> {
    return this.prisma.applicationUser.create(args);
  }
  async updateApplicationUser(
    args: Prisma.ApplicationUserUpdateArgs
  ): Promise<PrismaApplicationUser> {
    return this.prisma.applicationUser.update(args);
  }
  async deleteApplicationUser(
    args: Prisma.ApplicationUserDeleteArgs
  ): Promise<PrismaApplicationUser> {
    return this.prisma.applicationUser.delete(args);
  }
}