
import { Sequelize } from 'sequelize-typescript';
import { Player } from "../players/player.model";


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
      });
      sequelize.addModels([Player]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
