import { MovieImage } from "@/components/MovieImage";
import { MovieSearch } from "@/interfaces/api";
import Link from "next/link";

interface Props {
  movie: MovieSearch;
}

export const MovieCard = ({ movie }: Props) => {
  return (
    <div className="group cursor-pointer">
      {/* Image */}
      <div className="overflow-hidden rounded-md bg-gray-300 transition-all hover:scale-105">
        <Link
          className="relative block aspect-square"
          href={`/home/movies/${movie.imdbID}`}
        >
          <MovieImage
            src={movie.Poster}
            alt={movie.Title}
            fill
            objectFit="cover"
            className="transition-transform duration-300 transform group-hover:scale-105 object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      </div>
      {/* Content */}
      <div>
        <div className="flex gap-3">
          <span className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600">
            {movie.Type}
          </span>
        </div>
        <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
          <span className="dark:text-white">{movie.Title}</span>
        </h2>
        <div className="mt-3 text-gray-500 dark:text-gray-400">
          <time className="text-sm">{movie.Year}</time>
        </div>
      </div>
    </div>
  );
};
