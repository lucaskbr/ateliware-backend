import { IsString, IsOptional } from 'class-validator';

export class GetFavoriteRepositoriesDTO {
  @IsOptional()
  @IsString()
  page: number;
}
