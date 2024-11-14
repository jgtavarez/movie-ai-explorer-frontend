import { Metadata } from "next";
import Image from "next/image";
import { ExtraRating } from "./ui/ExtraRating";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RecommendationsMovies } from "./ui/RecommendationsMovies";
import { Ul } from "@/components/ui/Ul";
import { getMovie } from "@/actions/movies";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { imdbID, Title, Plot } = await getMovie(params.id);

    return {
      title: `${Title} - ${imdbID}`,
      description: Plot,
    };
  } catch (error) {
    console.error(error);
    return {
      title: "",
      description: "",
    };
  }
}

export default async function MoviePage({ params }: Props) {
  const movie = await getMovie(params.id);

  return (
    <section className="pt-10 sm:pt-16 bg-white">
      <Breadcrumb
        crumbs={[
          {
            text: "Home",
            href: "/home",
          },
          {
            text: "Movies",
            href: "/home/movies",
          },
          {
            text: movie.Title,
            href: "",
          },
        ]}
      />
      {/* Photo */}
      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
          {movie.Poster !== "N/A" ? (
            <Image
              src={movie.Poster}
              width={300}
              height={400}
              alt={movie.Title}
              className="h-full w-full object-cover object-center"
            />
          ) : null}
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {movie.Title}
          </h1>
        </div>

        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <div className="flex flex-col gap-6">
            <ExtraRating source="Metascore" score={movie.Metascore} />
            <ExtraRating source="IMDb Rating" score={movie.imdbRating} />
          </div>

          <form className="mt-10">
            {/* More Ratings */}
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                More Ratings
              </h3>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {movie.Ratings.map((ratings) => (
                    <li key={ratings.Source} className="text-gray-400">
                      <span className="text-gray-600">{ratings.Source}</span>
                      <span className="ml-3 text-sm font-medium text-teal-600 hover:text-cyan-500">
                        {ratings.Value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Director */}
            <div className="mt-5">
              <h3 className="text-sm font-medium text-gray-900">Director</h3>
              <div className="mt-4">
                <Ul
                  lists={movie.Director.split(",").map((director) => director)}
                />
              </div>
            </div>

            {/* Writer */}
            <div className="mt-5">
              <h3 className="text-sm font-medium text-gray-900">Writer</h3>
              <div className="mt-4">
                <Ul lists={movie.Writer.split(",").map((writer) => writer)} />
              </div>
            </div>

            {/* Actors */}
            <div className="mt-5">
              <h3 className="text-sm font-medium text-gray-900">Actors</h3>
              <div className="mt-4">
                <Ul lists={movie.Actors.split(",").map((actors) => actors)} />
              </div>
            </div>

            <button
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 px-8 py-3 text-base font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Add to favorite
            </button>
          </form>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          <div>
            <div className="space-y-6">
              <p className="text-base text-gray-900">{movie.Plot}</p>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-sm font-medium text-gray-900">Genre</h3>
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {movie.Genre.split(",").map((genre) => (
                  <li key={genre} className="text-gray-400">
                    <span className="text-gray-600">{genre}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <section aria-labelledby="shipping-heading" className="mt-10">
            <h2
              id="shipping-heading"
              className="text-sm font-medium text-gray-900"
            >
              Details
            </h2>
            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">
                {`This movie was released on ${movie.Year} with a rating of ${movie.Rated} and a runtime of ${movie.Runtime}. It's available in languages like (${movie.Language}) and was produced in ${movie.Country}. The film has earned ${movie.Awards}.`}
              </p>
            </div>
          </section>
        </div>

        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <section
            aria-labelledby="reviews-heading"
            className="border-t border-gray-200 pt-10 lg:pt-16"
          >
            <h2 id="reviews-heading" className="sr-only">
              Reviews
            </h2>

            
          </section>
        </div>
      </div>
      <RecommendationsMovies />
    </section>
  );
}
