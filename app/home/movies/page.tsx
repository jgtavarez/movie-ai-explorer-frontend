import { MovieCard } from "./ui/MovieCard";
import { Search } from "@/components/Search";
import { getMovies } from "@/actions/movies";
import { Alert } from "@/components/Alert";
import { Pagination } from "@/components/Pagination";
import { CardsGrid } from "@/components/CardsGrid";

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { search = "avenger", page = "1" } = await searchParams;
  const { movies, totalResults } = await getMovies({
    search,
    page,
  });

  return (
    <>
      <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg mt-6 lg:mt-8">
        <Search />
        {movies.length ? (
          <>
            <CardsGrid>
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </CardsGrid>
            <Pagination totalResults={totalResults} />
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
