import { Category } from "@/interfaces/entities/Category";
import { authFetch } from "@/lib/api";

export const getCategories = async (): Promise<Category[]> => {
  const data: Category[] = await authFetch(`/categories`, {
    cache: "force-cache",
  }).then((res) => res.json());

  return data;
};
