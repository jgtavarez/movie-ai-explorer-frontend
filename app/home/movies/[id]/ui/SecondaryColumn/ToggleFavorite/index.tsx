import { getFavorite } from "@/lib/queries/favorites";
import { ToggleFavoriteClient } from "./Client";
import { toggleFavorite } from "@/lib/actions/favorites";

interface Props {
  imdbId: string;
}

export const ToggleFavorite = async ({ imdbId }: Props) => {
  const favorite = await getFavorite(imdbId);
  return <ToggleFavoriteClient favorite={favorite} action={toggleFavorite} />;
};
