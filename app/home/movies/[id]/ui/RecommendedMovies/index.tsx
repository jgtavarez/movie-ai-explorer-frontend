import { SparkleIcon } from "@/components/icon";
import { MovieCard } from "@/components/MovieCard";
import { getRecommendedMovies } from "@/lib/queries/movies";

interface Props {
  imdbId: string;
}

export default async function RecommendedMovies({ imdbId }: Props) {
  const recommendedMovies = await getRecommendedMovies(imdbId);

  return (
    <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold title-theme">Customers also see</h2>
        <SparkleIcon />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {recommendedMovies.map((recommendedMovie) => (
          <MovieCard key={recommendedMovie.imdbID} movie={recommendedMovie} />
        ))}
      </div>
    </section>
  );
}
