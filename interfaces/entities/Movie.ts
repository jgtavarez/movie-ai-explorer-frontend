import { MovieType } from "../api";
import { PaginationParams } from "../pagination";
import { BaseEntity } from "./BaseEntity";

export interface Movie extends BaseEntity {
  imdbId: string;
  title: string;
  poster: string;
}

// DTO

export interface GetAllMoviesParams extends PaginationParams {
  search: string;
  type?: MovieType;
  year?: number;
}
