import {
  IsNotEmpty, IsNumber, Max
} from "class-validator";
import { Player } from "./player.model";

export class GetPlayerDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  name: string;

  @Max(1000000000)
  @IsNotEmpty()
  gold: number;

  constructor(player: Player, goldAmount: number = 0) {
    this.name = player.name;
    this.id = player.id;
    this.gold = goldAmount;
  }

}
