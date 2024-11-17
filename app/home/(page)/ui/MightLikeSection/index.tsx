import { getMovies } from "@/actions/movies";
import { MovieCard } from "@/app/home/movies/ui/MovieCard";
import { SparkleIcon } from "@/components/icons";
import React from "react";

export const MightLikeSection = async () => {
  const { movies: trendingMovies } = await getMovies({
    search: "food",
    page: "1",
  });

  return (
    <section className="mt-16">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold title-theme">You Might Like</h2>
        <SparkleIcon />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {trendingMovies.slice(0, 4).map((trendingMovie) => (
          <MovieCard key={trendingMovie.imdbID} movie={trendingMovie} />
        ))}
      </div>
    </section>
  );
};
