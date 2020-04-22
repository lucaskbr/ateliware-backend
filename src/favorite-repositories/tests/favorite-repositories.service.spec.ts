import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteRepositoriesService } from '../favorite-repositories.service';
import { FavoriteRepository } from '../favorite-repositories.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

const favoriteRepositoriesMock = [
  new FavoriteRepository('test1', 'testAvatar1', 'testUrl1'),
  new FavoriteRepository('test2', 'testAvatar2', 'testUrl2'),
  new FavoriteRepository('test3', 'testAvatar3', 'testUrl3'),
];

describe('FavoriteRepositoriesService', () => {
  let service: FavoriteRepositoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FavoriteRepositoriesService,
        {
          provide: getRepositoryToken(FavoriteRepository),
          useValue: {
            find: jest.fn().mockResolvedValue(favoriteRepositoriesMock),
          },
        },
      ],
    }).compile();

    service = module.get<FavoriteRepositoriesService>(
      FavoriteRepositoriesService,
    );
  });

  describe('FindAll', () => {
    it('should return an array of favoriteRepositories', async () => {
      const result = await service.findAll();
      expect(result).toEqual(favoriteRepositoriesMock);
    });
  });
});
