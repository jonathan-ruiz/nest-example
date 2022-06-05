import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreatePlayerDto } from "./create-player.dto";
import { GetPlayerDto } from "./get-player.dto";
import { Player } from "./player.model";
import { PlayersService } from "./players.service";


@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  // Create player
  @Post()
  async createPlayer(@Body() player: CreatePlayerDto): Promise<GetPlayerDto> {
    console.log("PlayerController", player)
    // store Identifier and Gold in Redis
    return await this.playersService.createPlayer(player);
  }


// Get player
  @Get('/:id')
  async getPlayer(@Param('id') id: number): Promise<GetPlayerDto> {
    // Get gold in Redis
    return await this.playersService.getPlayer(id);
  }
}


