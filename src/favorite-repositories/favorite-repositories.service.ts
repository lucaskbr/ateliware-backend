import { Injectable, MethodNotAllowedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FavoriteRepository } from './favorite-repositories.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LikeFavoriteRepositoryDTO } from './dto/like-favorite-repository-dto';
import { plainToClass } from 'class-transformer';

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
      skip: (20 * page) | 0,
    });
  }

  async like(favoriteRepositoryDTO: LikeFavoriteRepositoryDTO) {
    const favoriteRepository = plainToClass(
      FavoriteRepository,
      favoriteRepositoryDTO,
    );

    const repositoryExists = await this.favoriteRepositoriesRepository.findOne({
      where: {
        githubId: favoriteRepository.githubId,
      },
    });

    if (repositoryExists) {
      repositoryExists.isActive = !repositoryExists.isActive;
      return this.favoriteRepositoriesRepository.save(repositoryExists);
    }

    return this.favoriteRepositoriesRepository.save(favoriteRepository);
  }
}
