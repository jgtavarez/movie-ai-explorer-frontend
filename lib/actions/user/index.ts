"use server";
import { UpdateUserInput, User } from "@/interfaces/entities/User";
import { authFetch } from "@/lib/api";
import { revalidateTag } from "next/cache";

export const updateUser = async (
  updateUserInput: UpdateUserInput
): Promise<User> => {
  const data: User = await authFetch(`/user`, {
    method: "PATCH",
    body: JSON.stringify({ ...updateUserInput }),
  }).then((res) => res.json());

  // revalidate cache
  revalidateTag("getUser");
  revalidateTag("getUserRecommendedMovies");

  return data;
};
