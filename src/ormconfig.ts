import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as dotenv from 'dotenv';

dotenv.config();

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT, 10),
  //name: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,

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
