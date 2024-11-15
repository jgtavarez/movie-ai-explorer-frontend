import { BaseEntity } from "./BaseEntity";
import { Movie } from "./Movie";
import { User } from "./User";

export interface Favorite extends BaseEntity {
  user: User;
  movie: Movie;
}

// DTO

export interface GetAllFavoritesParams {
  search: string;
}
