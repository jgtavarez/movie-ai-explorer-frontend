import { AiReview } from "@/interfaces/ai";
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

  const data: MoviesResp = await authFetch(`/movies?${params}`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24, // 24h
    },
  }).then((res) => res.json());

  return {
    movies: data?.Search || [],
    totalResults: +data?.totalResults || 0,
  };
};

export const getMovie = async (id: string): Promise<MovieResp> => {
  const data: MovieResp = await authFetch(`/movies/${id}`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24, // 24h
    },
  }).then((resp) => {
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
    `/movies/recommendations/${imdbId}`,
    {
      cache: "force-cache",
      next: {
        revalidate: 60 * 60 * 24, // 24h
      },
    }
  ).then((res) => res.json());

  return data;
};

export const getAiReview = async (imdbId: string): Promise<AiReview> => {
  const data: AiReview = await authFetch(`/movies/review/${imdbId}`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24, // 24h
    },
  }).then((res) => res.json());

  return data;
};
