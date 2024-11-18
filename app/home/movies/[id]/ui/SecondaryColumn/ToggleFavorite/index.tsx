import { getFavorite, toggleFavorite } from "../../../../../../../actions/favorites";
import { ToggleFavoriteClient } from "./Client";

interface Props {
  imdb_id: string;
}

export const ToggleFavorite = async ({ imdb_id }: Props) => {
  const favorite = await getFavorite(imdb_id);
  return <ToggleFavoriteClient favorite={favorite} action={toggleFavorite} />;
};
