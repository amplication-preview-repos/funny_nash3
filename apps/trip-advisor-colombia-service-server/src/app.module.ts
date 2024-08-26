import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { ReviewModule } from "./review/review.module";
import { CategoryModule } from "./category/category.module";
import { EventModule } from "./event/event.module";
import { NotificationModule } from "./notification/notification.module";
import { ApplicationUserModule } from "./applicationUser/applicationUser.module";
import { UserRoleModule } from "./userRole/userRole.module";
import { EventManagerModule } from "./eventManager/eventManager.module";
import { CityModule } from "./city/city.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    ReviewModule,
    CategoryModule,
    EventModule,
    NotificationModule,
    ApplicationUserModule,
    UserRoleModule,
    EventManagerModule,
    CityModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
