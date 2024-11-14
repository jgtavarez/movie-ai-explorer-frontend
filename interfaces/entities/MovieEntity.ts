import { MovieType } from "../api";

export interface GetAllMoviesParams {
  search: string;
  type?: MovieType;
  year?: number;
}
