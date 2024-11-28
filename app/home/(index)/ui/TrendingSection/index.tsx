import { getMovies } from "../../../../../actions/movies";
import { MovieCard } from "../../../../../components/MovieCard";

export const TrendingSection = async () => {
  const { movies: trendingMovies } = await getMovies({
    search: "Avengers",
    page: "1",
  });

  return (
    <div className="mt-16">
      <h2 className="text-xl font-bold title-theme">Trending Now</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {trendingMovies.slice(0, 4).map((trendingMovie) => (
          <MovieCard key={trendingMovie.imdbID} movie={trendingMovie} />
        ))}
      </div>
    </div>
  );
};
