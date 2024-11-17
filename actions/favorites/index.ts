"use server";
import {
  Favorite,
  GetAllFavoritesParams,
  ToggleFavoriteInput,
} from "@/interfaces/entities/Favorite";
import { authFetch } from "@/lib/api";
import { getCacheKey } from "@/lib/auth";
import { revalidateTag } from "next/cache";

const CACHE_KEY = "favorites";

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
    `${process.env.SERVER_URL}/favorites?${params}`,
    {
      next: {
        tags: [await getCacheKey(CACHE_KEY)],
        revalidate: 7 * 24 * 60 * 60, // 7d
      },
    }
  ).then((res) => res.json());

  return {
    favorites: data || [],
  };
};

export const toggleFavorite = async (
  toggleFavoriteInput: ToggleFavoriteInput
): Promise<Favorite> => {
  const { imdb_id } = toggleFavoriteInput;
  const data: Favorite = await authFetch(
    `${process.env.SERVER_URL}/favorites`,
    {
      method: "POST",
      body: JSON.stringify({ imdb_id }),
    }
  ).then((res) => res.json());

  revalidateTag(await getCacheKey(CACHE_KEY)); // force revalidate

  return data;
};

export const getFavorite = async (imdb_id: string): Promise<boolean> => {
  const data: boolean = await authFetch(
    `${process.env.SERVER_URL}/favorites/${imdb_id}`
  ).then((res) => res.json());

  return data;
};
