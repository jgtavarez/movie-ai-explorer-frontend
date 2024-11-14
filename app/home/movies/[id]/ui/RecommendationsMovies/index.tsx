import { Icon } from "@/components/ui/Icon";
import { MovieCard } from "../../../ui/MovieCard";
import { getRecommendedMovies } from "@/actions/movies";

export const RecommendationsMovies = async () => {
  const recommendedMovies = await getRecommendedMovies();

  return (
    <section className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="flex items-center gap-2">
        <h2
          id="related-products-heading"
          className="text-xl font-bold title-theme"
        >
          Customers also see
        </h2>
        <Icon variant="sparkle" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {recommendedMovies.slice(0, 5).map((recommendedMovie) => (
          <MovieCard key={recommendedMovie.imdbID} movie={recommendedMovie} />
        ))}
      </div>
    </section>
  );
};