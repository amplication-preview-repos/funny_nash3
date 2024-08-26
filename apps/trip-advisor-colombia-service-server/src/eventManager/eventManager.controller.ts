import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EventManagerService } from "./eventManager.service";
import { EventManagerControllerBase } from "./base/eventManager.controller.base";

@swagger.ApiTags("eventManagers")
@common.Controller("eventManagers")
export class EventManagerController extends EventManagerControllerBase {
  constructor(
    protected readonly service: EventManagerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
