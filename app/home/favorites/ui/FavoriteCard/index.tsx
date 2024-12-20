"use client";
import { ClockIcon, FavoriteIcon } from "@/components/icon";
import { Modal } from "@/components/Modal";
import { MovieImage } from "@/components/MovieImage";
import { useModal } from "@/hooks/useModal";
import { Favorite } from "@/interfaces/entities/Favorite";
import { toggleFavorite } from "@/lib/actions/favorites";
import { formatDate, timeAgo } from "@/lib/time";
import Link from "next/link";

interface Props {
  favorite: Favorite;
}

export const FavoriteCard = ({ favorite }: Props) => {
  const { open, setOpen } = useModal();

  return (
    <>
      <div className="bg-white dark:bg-slate-800 p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
        {/* Image */}
        <div className="relative mb-4 rounded-2xl overflow-hidden h-80">
          <MovieImage
            src={favorite.movie.poster}
            alt={favorite.movie.title}
            fill
            className="transition-transform duration-300 transform group-hover:scale-105 object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div
            className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md z-50"
            onClick={async () => {
              setOpen(true);
            }}
          >
            <FavoriteIcon />
          </div>
          <Link
            prefetch={true}
            href={`/home/movies/${favorite.movie.imdbId}`}
            className="flex justify-center items-center bg-red-700 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
          >
            {"See more >>"}
          </Link>
        </div>
        {/* Content */}
        <div className="flex justify-between items-start w-full pb-4">
          <div>
            <p className="text-sm font-semibold title-theme">
              IMDb: {favorite.movie.imdbId}
            </p>
            <p className="text-sm text-gray-500 description-theme">
              Added on {formatDate(favorite.created_at)}
            </p>
          </div>
          <div className="text-sm flex items-center text-gray-500 description-theme">
            {timeAgo(favorite.created_at)}
            <ClockIcon />
          </div>
        </div>
        <h3 className="font-medium text-xl leading-8 truncate text-ellipsis group-hover:text-red-700 transition-colors duration-200 title-theme">
          {favorite.movie.title}
        </h3>
      </div>

      {/* Modal */}
      {open ? (
        <Modal
          title="Remove Favorite"
          description={`Are you sure you want to delete <strong>${favorite.movie.title}</strong> from your favorite movie list?`}
          onCancel={() => setOpen(false)}
          onConfirm={async () => {
            await toggleFavorite({ imdbId: favorite.movie.imdbId });
            setOpen(false);
          }}
        />
      ) : null}
    </>
  );
};
