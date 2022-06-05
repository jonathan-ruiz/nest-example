import {
  IsNotEmpty, Max
} from 'class-validator';

export class CreatePlayerDto {
  @IsNotEmpty()
  name: string;

  @Max(1000000000)
  gold?: number;
}
