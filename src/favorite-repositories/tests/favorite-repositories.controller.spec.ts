import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteRepositoriesController } from '../favorite-repositories.controller';
import { FavoriteRepositoriesService } from '../favorite-repositories.service';
import { GetFavoriteRepositoriesDTO } from '../dto/get-favorite-repositories-dto';

const favoriteRepositoriesArray = [
  {
    name: 'test1',
    avatarOwnerUrl: 'testAvatar1',
    url: 'testUrl1',
  },
  {
    name: 'test2',
    avatarOwnerUrl: 'testAvatar2',
    url: 'testUrl2',
  },
  {
    name: 'test3',
    avatarOwnerUrl: 'testAvatar3',
    url: 'testUrl3',
  },
];

describe('FavoriteRepositories Controller', () => {
  let controller: FavoriteRepositoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteRepositoriesController],
      providers: [
        {
          provide: FavoriteRepositoriesService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(favoriteRepositoriesArray),
          },
        },
      ],
    }).compile();

    controller = module.get<FavoriteRepositoriesController>(
      FavoriteRepositoriesController,
    );
  });
  describe('findAll', () => {
    it('should get an array of favoriteRepositories', async () => {
      const favoriteRepositoryDTO: GetFavoriteRepositoriesDTO = {
        page: 1,
      };
      expect(controller.findAll(favoriteRepositoryDTO)).resolves.toEqual(
        favoriteRepositoriesArray,
      );
    });
  });
});
