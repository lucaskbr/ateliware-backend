import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as dotenv from 'dotenv';

dotenv.config();

const config: ConnectionOptions = {
  type: 'postgres',
  url: process.env.DB_URL,

  entities: [__dirname + '/**/*.entity{.ts,.js}'],

  synchronize: process.env.TYPEORM_SYNC === 'true',
  migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
  logging: process.env.TYPEORM_LOGGING === 'true',
  logger: 'file',

  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  namingStrategy: new SnakeNamingStrategy(),
};

export = config;
