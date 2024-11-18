"use server";
import { notFound } from "next/navigation";
import { authFetch, InitOptions, Options } from "../../lib/api";
import { GetAllMoviesParams } from "../../interfaces/entities/Movie";
import { MovieResp, MovieSearch, MoviesResp } from "../../interfaces/api";
import { AiReview } from "../../interfaces/ai";

export const getMovies = async (
  getAllMoviesParams: GetAllMoviesParams,
  { skip }: Options = InitOptions
): Promise<{
  movies: MovieSearch[];
  totalResults: number;
}> => {
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
        revalidate: 7 * 24 * 60 * 60, // 7d
      },
    }
  ).then((res) => res.json());

  return {
    movies: data?.Search || [],
    totalResults: +data?.totalResults || 0,
  };
};

export const getMovie = async (id: string): Promise<MovieResp> => {
  const data: MovieResp = await authFetch(
    `${process.env.SERVER_URL}/movies/${id}`,
    {
      next: {
        revalidate: 7 * 24 * 60 * 60, // 7d
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

export const getRecommendedMovies = async (
  imdbId: string
): Promise<MovieResp[]> => {
  const data: MovieResp[] = await authFetch(
    `${process.env.SERVER_URL}/movies/recommendations/${imdbId}`,
    {
      next: {
        revalidate: 60 * 60 * 24, // 24h
      },
    }
  ).then((res) => res.json());

  return data;
};

export const getAiReview = async (imdbId: string): Promise<AiReview> => {
  const data: AiReview = await authFetch(
    `${process.env.SERVER_URL}/movies/review/${imdbId}`,
    {
      next: {
        revalidate: 60 * 60 * 24, // 24h
      },
    }
  ).then((res) => res.json());

  return data;
};
