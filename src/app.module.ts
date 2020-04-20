import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FavoriteRepositoriesModule } from './favorite-repositories/favorite-repositories.module';

@Module({
  imports: [FavoriteRepositoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
