import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FavoriteRepositoriesModule } from './favorite-repositories/favorite-repositories.module';
import { Connection } from 'typeorm';

import * as ormconfig from './ormconfig';

export function DatabaseOrmModule(): DynamicModule {
  return TypeOrmModule.forRoot(ormconfig);
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormconfig),
    FavoriteRepositoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
