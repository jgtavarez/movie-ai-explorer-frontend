import { MovieImage } from "@/components/MovieImage";
import { Favorite } from "@/interfaces/entities/Favorite";
import { formatDate } from "@/lib/time";
import Link from "next/link";

interface Props {
  favorite: Favorite;
}

export const FavoriteCard = ({ favorite }: Props) => {
  return (
    <article className="bg-white dark:bg-slate-800 p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
      <div className="relative mb-4 rounded-2xl overflow-hidden h-80">
        <MovieImage
          src={favorite.movie.poster}
          alt={favorite.movie.title}
          fill
          className="rounded-2xl transition-transform duration-300 transform group-hover:scale-105 object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-red-700"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            ></path>
          </svg>
        </div>
        <Link
          href={`/home/movies/${favorite.movie.imdb_id}`}
          className="flex justify-center items-center bg-red-700 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
        >
          See more
          <svg
            className="ml-2 w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            ></path>
          </svg>
        </Link>
      </div>
      <div className="flex justify-between items-start w-full pb-4 mb-auto">
        <div className="flex items-center">
          <div className="flex flex-1">
            <div className="">
              <p className="text-sm font-semibold title-theme">
                IMDb: {favorite.movie.imdb_id}
              </p>
              <p className="text-sm text-gray-500 description-theme">
                Added on {formatDate(favorite.created_at)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="text-sm flex items-center text-gray-500 description-theme">
            2 Days ago
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <h3 className="font-medium text-xl leading-8 truncate text-ellipsis">
        <a
          href="https://www.creative-tim.com/twcomponents/blog/slug"
          className="block relative group-hover:text-red-700 transition-colors duration-200 title-theme"
        >
          {favorite.movie.title}
        </a>
      </h3>
      <div></div>
    </article>
  );
};
