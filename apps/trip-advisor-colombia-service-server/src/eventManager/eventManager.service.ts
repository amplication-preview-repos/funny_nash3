import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EventManagerServiceBase } from "./base/eventManager.service.base";

@Injectable()
export class EventManagerService extends EventManagerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
