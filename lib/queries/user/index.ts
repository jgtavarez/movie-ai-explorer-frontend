import { MovieResp } from "@/interfaces/api";
import { User } from "@/interfaces/entities/User";
import { authFetch } from "@/lib/api";

export const getUser = async (): Promise<User> => {
  const data: User = await authFetch(`/user`, {
    cache: "force-cache",
    next: {
      tags: ["getUser"],
      revalidate: 60 * 60 * 24, // 24h
    },
  }).then((res) => res.json());

  return data;
};

export const getUserRecommendedMovies = async (): Promise<MovieResp[]> => {
  const data: MovieResp[] = await authFetch(`/user/recommendations`, {
    cache: "force-cache",
    next: {
      tags: ["getUserRecommendedMovies"],
      revalidate: 60 * 60 * 24, // 24h
    },
  }).then((res) => res.json());

  return data;
};
