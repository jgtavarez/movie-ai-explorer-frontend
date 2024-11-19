"use server";
import { revalidateTag } from "next/cache";
import { UpdateUserInput, User } from "../../interfaces/entities/User";
import { authFetch } from "../../lib/api";
import { getCacheKey } from "../../lib/auth";
import { MovieResp } from "../../interfaces/api";

const CACHE_KEY = "user";

export const getUser = async (): Promise<User> => {
  const data: User = await authFetch(`${process.env.SERVER_URL}/user`, {
    next: {
      tags: [await getCacheKey(CACHE_KEY)],
      revalidate: 60 * 60 * 24, // 24h
    },
  }).then((res) => res.json());

  return data;
};

export const updateUser = async (
  updateUserInput: UpdateUserInput
): Promise<User> => {
  const data: User = await authFetch(`${process.env.SERVER_URL}/user`, {
    method: "PATCH",
    body: JSON.stringify({ ...updateUserInput }),
  }).then((res) => res.json());

  revalidateTag(await getCacheKey(CACHE_KEY)); // revalidate user data
  revalidateTag(await getCacheKey(`${CACHE_KEY}:recommendations`)); // revalidate user recommendations

  return data;
};

export const getUserRecommendedMovies = async (): Promise<MovieResp[]> => {
  const data: MovieResp[] = await authFetch(
    `${process.env.SERVER_URL}/user/recommendations`,
    {
      next: {
        tags: [await getCacheKey(`${CACHE_KEY}:recommendations`)],
        revalidate: 60 * 60 * 24, // 24h
      },
    }
  ).then((res) => res.json());

  return data;
};
