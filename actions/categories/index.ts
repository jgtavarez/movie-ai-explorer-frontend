"use server";
import { Category } from "@/interfaces/entities/Category";
import { authFetch } from "@/lib/api";
import { getCacheKey } from "@/lib/auth";

const CACHE_KEY = "categories";

export const getCategories = async (): Promise<Category[]> => {
  console.log("getCategories");
  const data: Category[] = await authFetch(
    `${process.env.SERVER_URL}/categories`,
    {
      next: {
        tags: [await getCacheKey(CACHE_KEY)],
        revalidate: 7 * 24 * 60 * 60, // 7d
      },
    }
  ).then((res) => res.json());

  return data;
};
