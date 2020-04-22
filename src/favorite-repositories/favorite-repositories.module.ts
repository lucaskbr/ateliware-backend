import { Module } from '@nestjs/common';
import { FavoriteRepositoriesController } from './favorite-repositories.controller';
import { FavoriteRepositoriesService } from './favorite-repositories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteRepository } from './favorite-repositories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteRepository])],
  controllers: [FavoriteRepositoriesController],
  providers: [FavoriteRepositoriesService],
})
export class FavoriteRepositoriesModule {}
