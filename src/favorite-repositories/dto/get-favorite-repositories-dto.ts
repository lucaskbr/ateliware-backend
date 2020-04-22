import { IsInt, Min } from 'class-validator';

export class GetFavoriteRepositoriesDTO {
  @IsInt()
  @Min(0)
  page: number;
}
