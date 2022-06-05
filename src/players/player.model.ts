
import { AutoIncrement, Column, Max, Model, PrimaryKey, Table } from "sequelize-typescript";
import { IsNumber } from "class-validator";

@Table
export class Player extends Model {
  @IsNumber()
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Max(1000000000)
  @Column
  amount: number;
}
