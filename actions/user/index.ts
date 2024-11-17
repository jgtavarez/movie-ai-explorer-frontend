"use server";
import { User } from "@/interfaces/entities/User";
import { authFetch } from "@/lib/api";

export const getUser = async (): Promise<User> => {
  const data: User = await authFetch(`${process.env.SERVER_URL}/user`, {
    next: {
      revalidate: 60 * 60 * 24, // 24h
    },
  }).then((res) => res.json());

  return data;
};
