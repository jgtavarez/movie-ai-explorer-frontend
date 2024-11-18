import { Rating } from "./Rating";
import { ToggleFavorite } from "./ToggleFavorite";
import { MovieResp } from "../../../../../../interfaces/api";
import { Ul } from "../../../../../../components/ui/Ul";

interface Props {
  movie: MovieResp;
}

export const SecondaryColumn = ({ movie }: Props) => {
  return (
    <div className="mt-4 lg:row-span-3 lg:mt-0">
      {/*  Ratings */}
      <div className="flex flex-col gap-6">
        <Rating source="Metascore" score={movie.Metascore} />
        <Rating source="IMDb Rating" score={movie.imdbRating} />
      </div>

      <div className="mt-10">
        {/* More Ratings */}
        {movie.Ratings.length ? (
          <div>
            <h3 className="text-sm font-bold title-theme">More Ratings</h3>
            <div className="mt-4">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {movie.Ratings.map((ratings) => (
                  <li key={ratings.Source} className="text-gray-400">
                    <span className="description-theme">{ratings.Source}</span>
                    <span className="ml-3 text-sm font-medium text-teal-600 hover:text-cyan-500">
                      {ratings.Value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}

        {/* Director */}
        <div className="mt-5">
          <h3 className="text-sm font-bold title-theme">Director</h3>
          <div className="mt-4">
            <Ul lists={movie.Director.split(",").map((director) => director)} />
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
  );
};
