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

  const data: Favorite[] = await authFetch(`/favorites?${params}`, {
    cache: "force-cache",
    next: {
      tags: ["getFavorites"],
      revalidate: 60 * 60 * 24, // 24h
    },
  }).then((res) => res.json());

  return {
    favorites: data || [],
  };
};

export const getFavorite = async (imdbId: string): Promise<boolean> => {
  const data: boolean = await authFetch(`/favorites/${imdbId}`, {
    cache: "force-cache",
    next: {
      tags: ["getFavorite"],
      revalidate: 60 * 60 * 24, // 24h
    },
  }).then((res) => res.json());

  return data;
};
