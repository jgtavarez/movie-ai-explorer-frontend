import Link from "next/link";
import { RocketIcon } from "../../../../../components/icons/RocketIcon";
import { ArrowIcon } from "../../../../../components/icons/ArrowIcon";

export const GetStarted = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-10 mt-14">
      <div className="relative flex flex-col mt-6 text-gray-700 bg-white dark:bg-gray-900 shadow-md bg-clip-border rounded-xl w-96 dark:border">
        <div className="p-6">
          <RocketIcon />
          <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal title-theme">
            Try searching to get started!
          </h5>
          <p className="block text-base antialiased font-light leading-relaxed description-theme">
            Use the search bar above to look for any movie, serie or episode.
            Explore your favorite titles, discover new ones, and start creating
            your personalized favorite movie list!
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link href={"/home/movies?search=Star+Wars"} className="inline-block">
            <button
              className="title-theme flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20"
              type="button"
            >
              Show Me
              <ArrowIcon />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
