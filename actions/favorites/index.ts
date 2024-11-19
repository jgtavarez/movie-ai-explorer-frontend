"use server";

import { revalidateTag } from "next/cache";
import {
  Favorite,
  GetAllFavoritesParams,
  ToggleFavoriteInput,
} from "../../interfaces/entities/Favorite";
import { authFetch } from "../../lib/api";
import { getCacheKey } from "../../lib/auth";

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

export const getFavorite = async (imdbId: string): Promise<boolean> => {
  const data: boolean = await authFetch(
    `${process.env.SERVER_URL}/favorites/${imdbId}`,
    {
      next: {
        tags: [await getCacheKey(`${CACHE_KEY}:${imdbId}`)],
        revalidate: 7 * 24 * 60 * 60, // 7d
      },
    }
  ).then((res) => res.json());

  return data;
};

export const toggleFavorite = async (
  toggleFavoriteInput: ToggleFavoriteInput
): Promise<Favorite> => {
  const { imdbId } = toggleFavoriteInput;
  const data: Favorite = await authFetch(
    `${process.env.SERVER_URL}/favorites`,
    {
      method: "POST",
      body: JSON.stringify({ imdbId }),
    }
  ).then((res) => res.json());

  revalidateTag(await getCacheKey(CACHE_KEY)); // revalidate getFavorites
  revalidateTag(await getCacheKey(`${CACHE_KEY}:${imdbId}`)); // revalidate getFavorite

  return data;
};
