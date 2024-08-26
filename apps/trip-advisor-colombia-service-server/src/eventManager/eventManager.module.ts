import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EventManagerModuleBase } from "./base/eventManager.module.base";
import { EventManagerService } from "./eventManager.service";
import { EventManagerController } from "./eventManager.controller";
import { EventManagerResolver } from "./eventManager.resolver";

@Module({
  imports: [EventManagerModuleBase, forwardRef(() => AuthModule)],
  controllers: [EventManagerController],
  providers: [EventManagerService, EventManagerResolver],
  exports: [EventManagerService],
})
export class EventManagerModule {}
