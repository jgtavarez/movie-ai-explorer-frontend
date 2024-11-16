import { Search } from "@/components/Search";
import { Alert } from "@/components/Alert";
import { getFavorites } from "@/actions/favorites";
import { CardsGrid } from "@/components/CardsGrid";
import { FavoriteCard } from "./ui/FavoriteCard/FavoriteCard";
import { Button } from "@/components/ui";
import Link from "next/link";
import { NoDataIcon } from "@/components/Icons";

export default async function FavoritesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { search = "" } = await searchParams;
  const { favorites } = await getFavorites({
    search,
  });

  return (
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg mt-6 lg:mt-8">
      <Search />
      {favorites.length ? (
        <CardsGrid>
          {favorites.map((favorite) => (
            <FavoriteCard key={favorite.id} favorite={favorite} />
          ))}
        </CardsGrid>
      ) : search !== "" ? (
        <Alert title="Oops!" description={`No results found for "${search}"`} />
      ) : (
        <div className="flex justify-center flex-col items-center gap-10 mt-14">
          <NoDataIcon />
          <div className="text-center">
            <span className="text-6xl block description-theme">Oops!</span>
            <span className="text-base md:text-lg description-theme mt-4">
              It seems you haven&apos;t added any movies to your favorites list
              yet. <br />
              Try adding one!
            </span>
          </div>
          <Link href="/home/movies" className="w-2/5 text-center">
            <Button text="See Movies" className="w-2/5" />
          </Link>
        </div>
      )}
    </div>
  );
}
