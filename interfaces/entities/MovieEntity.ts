import { MovieType } from "../api";
import { PaginationParams } from "../pagination";

export interface GetAllMoviesParams extends PaginationParams {
  search: string;
  type?: MovieType;
  year?: number;
}
