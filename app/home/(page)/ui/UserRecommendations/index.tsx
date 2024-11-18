import { getUserRecommendedMovies } from "@/actions/user";
import { MovieCard } from "@/app/home/movies/ui/MovieCard";
import { SparkleIcon } from "@/components/icons";
import React from "react";

export const UserRecommendations = async () => {
  const userRecommendedMovies = await getUserRecommendedMovies();

  return (
    <section className="mt-16">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold title-theme">You Might Like</h2>
        <SparkleIcon />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {userRecommendedMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </section>
  );
};