import { getFavorites } from "../../../actions/favorites";
import { Alert } from "../../../components/Alert";
import { CardGrid } from "../../../components/layouts/CardGrid";
import { Container } from "../../../components/layouts/Container";
import { Search } from "../../../components/Search";
import { FavoriteCard } from "./ui/FavoriteCard";
import { NoFavorites } from "./ui/NoFavorites";

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
    <Container>
      {/* Search */}
      <Search />

      {/* Render Favorites */}
      {favorites.length ? (
        <CardGrid>
          {favorites.map((favorite) => (
            <FavoriteCard key={favorite.id} favorite={favorite} />
          ))}
        </CardGrid>
      ) : search !== "" ? (
        // No Results
        <Alert title="Oops!" description={`No results found for "${search}"`} />
      ) : (
        // No Data
        <NoFavorites />
      )}
    </Container>
  );
}
