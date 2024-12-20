import { SparkleIcon } from "@/components/icon";
import { MovieCard } from "@/components/MovieCard";
import { getUserRecommendedMovies } from "@/lib/queries/user";

export default async function UserRecommendations() {
  const userRecommendedMovies = await getUserRecommendedMovies();

  if (!userRecommendedMovies.length) {
    return null;
  }

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
