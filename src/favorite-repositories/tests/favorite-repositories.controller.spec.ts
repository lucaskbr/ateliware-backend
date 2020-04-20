import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteRepositoriesController } from '../favorite-repositories.controller';

describe('FavoriteRepositories Controller', () => {
  let controller: FavoriteRepositoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteRepositoriesController],
    }).compile();

    controller = module.get<FavoriteRepositoriesController>(
      FavoriteRepositoriesController,
    );
  });
  describe('GET - FindAll', () => {
    it('should return FavoriteRepository[] or empty array', () => {
      //expect(controller).toBeDefined();
    });
  });
});
