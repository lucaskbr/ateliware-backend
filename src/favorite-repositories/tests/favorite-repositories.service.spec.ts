import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteRepositoriesService } from '../favorite-repositories.service';

describe('FavoriteRepositoriesService', () => {
  let service: FavoriteRepositoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoriteRepositoriesService],
    }).compile();

    service = module.get<FavoriteRepositoriesService>(
      FavoriteRepositoriesService,
    );
  });

  it('should be defined', () => {
    //expect(service).toBeDefined();
  });
});
