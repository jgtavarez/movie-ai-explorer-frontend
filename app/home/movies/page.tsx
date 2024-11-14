import { MovieCard } from "./ui/MovieCard";
import { Search } from "@/components/Search";
import { getMovies } from "@/actions/movies";
import { Alert } from "@/components/Alert";

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { search = "avenger" } = await searchParams;
  const movies = await getMovies({
    search,
  });

  return (
    <>
      <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg mt-6 lg:mt-8">
        <Search />
        {movies.length ? (
          <>
            <div className="grid gap-10 md:grid-cols-2 lg:gap-10 mt-6 lg:mt-8">
              {movies.slice(0, 2).map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
            <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
              {movies.slice(2, movies.length).map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          </>
        ) : (
          <Alert
            title="Oops!"
            description={`No results found for "${search}"`}
          />
        )}
      </div>
    </>
  );
}
