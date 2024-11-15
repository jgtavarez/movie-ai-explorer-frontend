import { Search } from "@/components/Search";
import { Alert } from "@/components/Alert";
import { getFavorites } from "@/actions/favorites";
import { CardsGrid } from "@/components/CardsGrid";
import { FavoriteCard } from "./ui/FavoriteCarousel/FavoriteCard.tsx/FavoriteCard";

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
    <>
      <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg mt-6 lg:mt-8">
        <Search />
        {favorites.length ? (
          <CardsGrid>
            {favorites.map((favorite) => (
              <FavoriteCard key={favorite.id} favorite={favorite} />
            ))}
          </CardsGrid>
        ) : (
          <Alert
            title="Oops!"
            description={`No results found for "${search}"`}
          />
        )}
      </div>
    </>
  );
}
