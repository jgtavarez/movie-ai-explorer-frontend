import { MovieCard } from "./ui/MovieCard";
import { Search } from "@/components/Search";
import { getMovies } from "@/actions/movies";
import { Alert } from "@/components/Alert";
import { Pagination } from "@/components/Pagination";
import { CardsGrid } from "@/components/CardsGrid";
import { RocketIcon } from "../../../components/Icons/RocketIcon";
import { ArrowIcon } from "@/components/Icons/ArrowIcon";

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { search = "", page = "1" } = await searchParams;
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
          </>
        ) : search !== "" ? (
          <>
            <Alert
              title="Oops!"
              description={`No results found for "${search}" ${
                page !== "1" ? `in page "${page}"` : ""
              }`}
            />
          </>
        ) : (
          <div className="flex justify-center flex-col items-center gap-10 mt-14">
            <div className="relative flex flex-col mt-6 text-gray-700 bg-white dark:bg-slate-800 shadow-md bg-clip-border rounded-xl w-96 dark:border">
              <div className="p-6">
                <RocketIcon />
                <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal title-theme">
                  Try searching to get started!
                </h5>
                <p className="block text-base antialiased font-light leading-relaxed description-theme">
                  Use the search bar above to look for any movie, serie or
                  episode. Explore your favorite titles, discover new ones, and
                  start creating your personalized favorite movie list!
                </p>
              </div>
              <div className="p-6 pt-0">
                <a href="#" className="inline-block">
                  <button
                    className="title-theme flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                    type="button"
                  >
                    Learn More
                    <ArrowIcon />
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
        <div className={movies.length ? "visible" : "invisible"}>
          <Pagination totalResults={totalResults} />
        </div>
      </div>
    </>
  );
}
