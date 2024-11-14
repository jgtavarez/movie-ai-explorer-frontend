"use server";
import { MovieResp, MovieSearch, MoviesResp } from "@/interfaces/api";
import { GetAllMoviesParams } from "@/interfaces/entities/MovieEntity";
import { notFound } from "next/navigation";

export const getMovies = async (
  getAllMoviesParams: GetAllMoviesParams
): Promise<MovieSearch[]> => {
  const { search } = getAllMoviesParams;
  const params = new URLSearchParams({
    search,
  }).toString();

  const data: MoviesResp = await fetch(
    `${process.env.SERVER_URL}/movies?${params}`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhhNmVmNTVjLTE4MTUtNDY2YS04NmY2LTUxYjUyMTM3YWYwZiIsImlhdCI6MTczMTUzOTY2MCwiZXhwIjoxNzMxNjI2MDYwfQ.eUe-VbxikW65CsQUsSfm5du25wdz3aU_9oEZAJFEHVo",
      },
    }
  ).then((res) => res.json());

  return data?.Search || [];
};

export const getMovie = async (id: string): Promise<MovieResp> => {
  const data: MovieResp = await fetch(
    `${process.env.SERVER_URL}/movies/${id}`,
    {
      next: {
        revalidate: 60 * 60 * 24, //24h
      },
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhhNmVmNTVjLTE4MTUtNDY2YS04NmY2LTUxYjUyMTM3YWYwZiIsImlhdCI6MTczMTUzOTY2MCwiZXhwIjoxNzMxNjI2MDYwfQ.eUe-VbxikW65CsQUsSfm5du25wdz3aU_9oEZAJFEHVo",
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
  const params = new URLSearchParams({
    search: "music",
  }).toString();
  const data: MoviesResp = await fetch(
    `${process.env.SERVER_URL}/movies?${params}`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhhNmVmNTVjLTE4MTUtNDY2YS04NmY2LTUxYjUyMTM3YWYwZiIsImlhdCI6MTczMTUzOTY2MCwiZXhwIjoxNzMxNjI2MDYwfQ.eUe-VbxikW65CsQUsSfm5du25wdz3aU_9oEZAJFEHVo",
      },
    }
  ).then((res) => res.json());

  return data.Search;
};
