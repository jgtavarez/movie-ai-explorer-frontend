import { getMovies } from "../../../actions/movies";
import { Alert } from "../../../components/Alert";
import { CardGrid } from "../../../components/layouts/CardGrid";
import { Container } from "../../../components/layouts/Container";
import { Pagination } from "../../../components/Pagination";
import { Search } from "../../../components/Search";
import { GetStarted } from "./ui/GetStarted";
import { MovieCard } from "./ui/MovieCard";

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { search = "", page = "1" } = await searchParams;
  const { movies, totalResults } = await getMovies(
    {
      search,
      page,
    },
    { skip: !search }
  );

  return (
    <Container>
      {/* Search */}
      <Search />

      {/* Render Movies */}
      {movies.length ? (
        <CardGrid>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </CardGrid>
      ) : search !== "" ? (
        // No Results
        <Alert
          title="Oops!"
          description={`No results found for "${search}" ${
            page !== "1" ? `in page "${page}"` : ""
          }`}
        />
      ) : (
        // No Search
        <GetStarted />
      )}

      {/* Pagination */}
      <div className={movies.length ? "visible" : "invisible"}>
        <Pagination totalResults={totalResults} />
      </div>
    </Container>
  );
}
