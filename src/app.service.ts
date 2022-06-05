import { Injectable } from '@nestjs/common';
import { GetPlayerDto } from "./players/get-player.dto";

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }
}
