import { Injectable } from '@nestjs/common';
import { GetPlayerDto } from "./get-player.dto";
import { Player } from "./player.model";
import { CreatePlayerDto } from "./create-player.dto";

@Injectable()
export class PlayersService {
  async createPlayer(player: CreatePlayerDto): Promise<GetPlayerDto> {
    return new GetPlayerDto(await Player.create({...player} ));

  }
  async getPlayer(id: number): Promise<GetPlayerDto>{
    return new GetPlayerDto(await Player.findOne({where: {id: id}}));
  }
}
