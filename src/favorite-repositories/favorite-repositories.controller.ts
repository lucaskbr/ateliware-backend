import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { FavoriteRepositoriesService } from './favorite-repositories.service';
import { GetFavoriteRepositoriesDTO } from './dto/get-favorite-repositories-dto';
import { LikeFavoriteRepositoryDTO } from './dto/like-favorite-repository-dto';

@Controller('favorite-repositories')
export class FavoriteRepositoriesController {
  constructor(
    private readonly favoriteRepositoriesService: FavoriteRepositoriesService,
  ) {}

  @Get()
  async findAll(@Query() { page }: GetFavoriteRepositoriesDTO) {
    return this.favoriteRepositoriesService.findAll(page);
  }

  @Post('/like')
  async like(@Body() favoriteRepositoryDTO: LikeFavoriteRepositoryDTO) {
    return this.favoriteRepositoriesService.like(favoriteRepositoryDTO);
  }
}
