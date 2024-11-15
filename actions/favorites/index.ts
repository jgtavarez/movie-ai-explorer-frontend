"use server";
import {
  Favorite,
  GetAllFavoritesParams,
} from "@/interfaces/entities/Favorite";
import { authFetch } from "@/lib/api";

export const getFavorites = async (
  getAllFavoritesParams: GetAllFavoritesParams
): Promise<{
  favorites: Favorite[];
}> => {
  const { search } = getAllFavoritesParams;
  const params = new URLSearchParams({
    search,
  }).toString();

  const data: Favorite[] = await authFetch(
    `${process.env.SERVER_URL}/favorites?${params}`
  ).then((res) => res.json());

  return {
    favorites: data || [],
  };
};

export const deleteFavorite = async (id: string): Promise<Favorite> => {
  const data: Favorite = await authFetch(
    `${process.env.SERVER_URL}/favorites/${id}`,
    {
      method: "DELETE",
    }
  ).then((res) => res.json());

  return data;
};
