import { NoDataIcon } from "@/components/icon";
import { Button } from "@/components/ui";
import Link from "next/link";

export const NoFavorites = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-10 mt-14">
      <NoDataIcon />
      <div className="text-center">
        <span className="text-6xl block description-theme">Oops!</span>
        <span className="text-base md:text-lg description-theme mt-4">
          It seems you haven&apos;t added any movies to your favorites list yet.{" "}
          <br />
          Try adding one!
        </span>
      </div>
      <Link href="/home/movies" className="w-2/5 text-center">
        <Button text="See Movies" className="w-2/5" />
      </Link>
    </div>
  );
};
