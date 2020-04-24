import { IsInt, IsString } from 'class-validator';

export class LikeFavoriteRepositoryDTO {
  @IsInt()
  githubId: number;

  @IsString()
  name: string;

  @IsString()
  url: string;

  @IsString()
  avatarOwnerUrl: string;

  @IsString()
  description: string;
}
