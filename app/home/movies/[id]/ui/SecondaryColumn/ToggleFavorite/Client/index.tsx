"use client";
import { Button } from "@/components/ui";
import { toggleFavorite } from "@/lib/actions/favorites";
import clsx from "clsx";
import { useParams } from "next/navigation";
import { useOptimistic } from "react";

interface Props {
  favorite: boolean;
}

export const ToggleFavoriteClient = ({ favorite }: Props) => {
  const { id = "" } = useParams();

  const [optimisticFavorite, setOptimisticFavorite] = useOptimistic(
    favorite,
    (_, newState: boolean) => newState
  );

  const formAction = async () => {
    setOptimisticFavorite(!optimisticFavorite);
    await toggleFavorite({ imdbId: id as string });
  };

  return (
    <form action={formAction}>
      <Button
        text={`${optimisticFavorite ? "Remove" : "Add"} Favorite`}
        className={clsx("mt-10", {
          "bg-red-500 hover:bg-red-400": optimisticFavorite,
        })}
      />
    </form>
  );
};
