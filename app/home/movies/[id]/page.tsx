import Image from "next/image";
import { ExtraRating } from "./ui/ExtraRating";
import { Breadcrumb } from "@/components/Breadcrumb";
import { RecommendationsMovies } from "./ui/RecommendationsMovies";
import { Ul } from "@/components/ui/Ul";
import { getMovie } from "@/actions/movies";
import { ToggleFavorite } from "./ui/ToggleFavorite";

interface Props {
  params: { id: string };
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   try {
//     const { imdbID, Title, Plot } = await getMovie(params.id);

//     return {
//       title: `${Title} - ${imdbID}`,
//       description: Plot,
//     };
//   } catch (error) {
//     console.error(error);
//     return {
//       title: "",
//       description: "",
//     };
//   }
// }

export default async function MoviePage({ params }: Props) {
  const movie = await getMovie(params.id);

  return (
    <section className="pt-10 sm:pt-16">
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
              alt={movie.Title}
              width={300}
              height={400}
              className="rounded-2xl transition-transform duration-300 transform group-hover:scale-105 object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : null}
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl title-theme">
            {movie.Title}
          </h1>
        </div>

        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <div className="flex flex-col gap-6">
            <ExtraRating source="Metascore" score={movie.Metascore} />
            <ExtraRating source="IMDb Rating" score={movie.imdbRating} />
          </div>

          <div className="mt-10">
            {/* More Ratings */}
            <div>
              <h3 className="text-sm font-bold title-theme">More Ratings</h3>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {movie.Ratings.map((ratings) => (
                    <li key={ratings.Source} className="text-gray-400">
                      <span className="description-theme">
                        {ratings.Source}
                      </span>
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
              <h3 className="text-sm font-bold title-theme">Director</h3>
              <div className="mt-4">
                <Ul
                  lists={movie.Director.split(",").map((director) => director)}
                />
              </div>
            </div>

            {/* Writer */}
            <div className="mt-5">
              <h3 className="text-sm font-bold title-theme">Writer</h3>
              <div className="mt-4">
                <Ul lists={movie.Writer.split(",").map((writer) => writer)} />
              </div>
            </div>

            {/* Actors */}
            <div className="mt-5">
              <h3 className="text-sm font-bold title-theme">Actors</h3>
              <div className="mt-4">
                <Ul lists={movie.Actors.split(",").map((actors) => actors)} />
              </div>
            </div>

            <ToggleFavorite imdb_id={movie.imdbID} />
          </div>
        </div>

        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          <div>
            <div className="space-y-6">
              <p className="text-base description-theme">{movie.Plot}</p>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-sm font-bold title-theme">Genre</h3>
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {movie.Genre.split(",").map((genre) => (
                  <li key={genre} className="description-theme">
                    <span>{genre}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <section aria-labelledby="shipping-heading" className="mt-10">
            <h2 id="shipping-heading" className="text-sm font-bold title-theme">
              Details
            </h2>
            <div className="mt-4 space-y-6">
              <p className="text-sm description-theme">
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

            <div className="space-y-10">
              <div className="flex flex-col sm:flex-row">
                <div className="order-2 mt-6 sm:ml-16 sm:mt-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    This is the best white t-shirt out there
                  </h3>
                  <div className="mt-3 space-y-6 text-sm text-gray-600">
                    <p>
                      I&apos;ve searched my entire life for a t-shirt that
                      reflects every color in the visible spectrum. Scientists
                      said it couldn&apos;t be done, but when I look at this
                      shirt, I see white light bouncing right back into my eyes.
                      Incredible!
                    </p>
                  </div>
                </div>

                <div className="order-1 flex items-center sm:flex-col sm:items-start">
                  <img
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Mark Edwards."
                    className="h-12 w-12 rounded-full"
                  />

                  <div className="ml-4 sm:ml-0 sm:mt-4">
                    <p className="text-sm font-medium text-gray-900">
                      Mark Edwards
                    </p>
                    <div className="mt-2 flex items-center">
                      <svg
                        className="text-gray-900 h-5 w-5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="text-gray-900 h-5 w-5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="text-gray-900 h-5 w-5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="text-gray-900 h-5 w-5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="text-gray-900 h-5 w-5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <RecommendationsMovies />
    </section>
  );
}
