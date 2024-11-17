"use server";
import { MovieResp, MovieSearch, MoviesResp } from "@/interfaces/api";
import { GetAllMoviesParams } from "@/interfaces/entities/Movie";
import { authFetch, InitOptions, Options } from "@/lib/api";
import { notFound } from "next/navigation";

export const getMovies = async (
  getAllMoviesParams: GetAllMoviesParams,
  { skip }: Options = InitOptions
): Promise<{
  movies: MovieSearch[];
  totalResults: number;
}> => {
  console.log("getMovies");
  const { search, page } = getAllMoviesParams;
  if (skip) {
    return {
      movies: [],
      totalResults: 0,
    };
  }

  const params = new URLSearchParams({
    search,
    page,
  }).toString();

  const data: MoviesResp = await authFetch(
    `${process.env.SERVER_URL}/movies?${params}`,
    {
      next: {
        revalidate: 60 * 60 * 24, // 24h
      },
    }
  ).then((res) => res.json());

  return {
    movies: data?.Search || [],
    totalResults: +data?.totalResults || 0,
  };
};

export const getMovie = async (id: string): Promise<MovieResp> => {
  console.log("getMovie");
  const data: MovieResp = await authFetch(
    `${process.env.SERVER_URL}/movies/${id}`,
    {
      next: {
        revalidate: 60 * 60 * 24, // 24h
      },
    }
  ).then((resp) => {
    if (resp.ok) {
      return resp.json();
    }
    notFound();
  });

  return data;
};

export const getRecommendedMovies = async (): Promise<MovieSearch[]> => {
  console.log("getRecommendedMovies");
  const params = new URLSearchParams({
    search: "music",
  }).toString();
  const data: MoviesResp = await authFetch(
    `${process.env.SERVER_URL}/movies?${params}`
  ).then((res) => res.json());

  return data.Search;
};
