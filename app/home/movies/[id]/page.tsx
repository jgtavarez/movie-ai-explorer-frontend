import Image from "next/image";
import { SecondaryColumn } from "./ui/SecondaryColumn";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { LoadingIcon } from "../../../../components/icons";
import { getMovie } from "../../../../actions/movies";
import { Breadcrumb } from "../../../../components/Breadcrumb";

// load recommendations ui lazy
const AiReview = dynamic(() => import("./ui/AiReview/index"), {
  loading: () => (
    <div className="mx-auto px-4 lg:max-w-7xl mt-14 mb-12 flex justify-start items-center space-x-1 text-sm title-theme">
      <LoadingIcon />
      <div>Loading...</div>
    </div>
  ),
});
const RecommendedMovies = dynamic(
  () => import("./ui/RecommendedMovies/index"),
  {
    loading: () => (
      <div className="mx-auto px-4 lg:max-w-7xl mt-14 mb-12 flex justify-start items-center space-x-1 text-sm title-theme">
        <LoadingIcon />
        <div>Loading...</div>
      </div>
    ),
  }
);

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
    <section className="pt-10 sm:pt-16">
      {/* Breadcrumb */}
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

        <SecondaryColumn movie={movie} />

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

        {/* Column */}
        <AiReview imdbId={movie.imdbID} />
      </div>

      {/* Recommended Movies */}
      <div className="mx-auto px-4 lg:max-w-7xl mt-14 mb-12">
        <hr />
      </div>
      <RecommendedMovies imdbId={movie.imdbID} />
    </section>
  );
}
