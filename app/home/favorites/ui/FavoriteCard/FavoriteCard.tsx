"use client";
import { toggleFavorite } from "@/actions/favorites";
import { ClockIcon, FavoriteIcon } from "@/components/Icons";
import { Modal } from "@/components/Modal";
import { MovieImage } from "@/components/MovieImage";
import { useModal } from "@/hooks/useModal";
import { Favorite } from "@/interfaces/entities/Favorite";
import { formatDate } from "@/lib/time";
import Link from "next/link";

interface Props {
  favorite: Favorite;
}

export const FavoriteCard = ({ favorite }: Props) => {
  const { open, setOpen } = useModal();

  return (
    <>
      <article className="bg-white dark:bg-slate-800 p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
        <div className="relative mb-4 rounded-2xl overflow-hidden h-80">
          <MovieImage
            src={favorite.movie.poster}
            alt={favorite.movie.title}
            fill
            className="rounded-2xl transition-transform duration-300 transform group-hover:scale-105 object-cover"
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
            href={`/home/movies/${favorite.movie.imdb_id}`}
            className="flex justify-center items-center bg-red-700 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
          >
            {"See more >>"}
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
              <ClockIcon />
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
      </article>
      {open ? (
        <Modal
          title="Remove Favorite"
          description={`Are you sure you want to delete <strong>${favorite.movie.title}</strong> from your favorite movie list?`}
          onCancel={() => setOpen(false)}
          onConfirm={async () => {
            await toggleFavorite({ imdb_id: favorite.movie.imdb_id });
            setOpen(false);
          }}
        />
      ) : null}
    </>
  );
};
