import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PlayersService } from './players.service';
import { Player } from "./player.model";
import { PlayersController } from './players.controller';

@Module({
  imports: [SequelizeModule],
  providers: [PlayersService],
  controllers: [PlayersController]

})
export class PlayersModule {}
