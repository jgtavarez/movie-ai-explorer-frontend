import { getFavorite, toggleFavorite } from "@/actions/favorites";
import { Toggle } from "./Toggle";

interface Props {
  imdb_id: string;
}

export const ToggleFavorite = async ({ imdb_id }: Props) => {
  const favorite = await getFavorite(imdb_id);
  return <Toggle favorite={favorite} action={toggleFavorite} />;
};
