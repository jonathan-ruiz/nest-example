import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PlayersModule } from './players/players.module';
import { ConfigModule } from '@nestjs/config';
import { PlayersService } from "./players/players.service";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    PlayersModule,
  ],
  controllers: [AppController],
  providers: [PlayersService],
})
export class AppModule {}
