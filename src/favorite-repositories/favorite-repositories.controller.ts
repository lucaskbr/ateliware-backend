import { Controller, Get, Param, Query } from '@nestjs/common';
import { FavoriteRepositoriesService } from './favorite-repositories.service';
import { GetFavoriteRepositoriesDTO } from './dto/get-favorite-repositories-dto';

@Controller('favorite-repositories')
export class FavoriteRepositoriesController {
  constructor(
    private readonly favoriteRepositoriesService: FavoriteRepositoriesService,
  ) {}

  @Get()
  async findAll(@Query() { page }: GetFavoriteRepositoriesDTO) {
    return this.favoriteRepositoriesService.findAll(page);
  }
}
