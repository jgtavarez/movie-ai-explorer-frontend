"use server";
import { Favorite, ToggleFavoriteInput } from "@/interfaces/entities/Favorite";
import { authFetch } from "@/lib/api";
import { revalidateTag } from "next/cache";

export const toggleFavorite = async (
  toggleFavoriteInput: ToggleFavoriteInput
): Promise<Favorite> => {
  const { imdbId } = toggleFavoriteInput;
  const data: Favorite = await authFetch(`/favorites`, {
    method: "POST",
    body: JSON.stringify({ imdbId }),
  }).then((res) => res.json());

  // revalidate cache
  revalidateTag("getFavorites");
  revalidateTag("getFavorite");

  return data;
};
