import { NoImage } from "@/components/NoImage";
import { MovieSearch } from "@/interfaces/api";
import Image from "next/image";
import Link from "next/link";

interface Props {
  movie: MovieSearch;
}

export const MovieCard = ({ movie }: Props) => {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
        <Link
          className={`relative block aspect-square`}
          href={`/home/movies/${movie.imdbID}`}
        >
          {movie.Poster !== "N/A" ? (
            <div className="relative w-full h-full">
              <Image
                key={movie.imdbID}
                src={movie.Poster}
                alt={movie.Title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={false}
              />
            </div>
          ) : (
            <NoImage />
          )}
        </Link>
      </div>
      <div>
        <div className="flex gap-3">
          <span className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600">
            {movie.Type}
          </span>
        </div>
        <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
          <span className="text-black">{movie.Title}</span>
        </h2>
        <div className="mt-3 text-gray-500 dark:text-gray-400">
          <time className="truncate text-sm">{movie.Year}</time>
        </div>
      </div>
    </div>
  );
};
