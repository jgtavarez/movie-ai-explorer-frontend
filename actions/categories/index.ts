"use server";
import { Category } from "../../interfaces/entities/Category";
import { authFetch } from "../../lib/api";

export const getCategories = async (): Promise<Category[]> => {
  const data: Category[] = await authFetch(
    `${process.env.SERVER_URL}/categories`,
    {
      cache: "force-cache",
    }
  ).then((res) => res.json());

  return data;
};
