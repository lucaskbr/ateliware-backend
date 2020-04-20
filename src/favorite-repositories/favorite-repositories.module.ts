import { Module } from '@nestjs/common';
import { FavoriteRepositoriesController } from './favorite-repositories.controller';
import { FavoriteRepositoriesService } from './favorite-repositories.service';

@Module({
  controllers: [FavoriteRepositoriesController],
  providers: [FavoriteRepositoriesService]
})
export class FavoriteRepositoriesModule {}
