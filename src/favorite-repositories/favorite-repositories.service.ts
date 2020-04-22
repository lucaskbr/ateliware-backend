import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FavoriteRepository } from './favorite-repositories.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FavoriteRepositoriesService {
  constructor(
    @InjectRepository(FavoriteRepository)
    private readonly favoriteRepositoriesRepository: Repository<
      FavoriteRepository
    >,
  ) {}

  async findAll(page?: number): Promise<FavoriteRepository[]> {
    return this.favoriteRepositoriesRepository.find({
      skip: (20 * page) | 1,
    });
  }
}
