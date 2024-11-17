"use client";
import { Button } from "@/components/ui";
import { useOptimistic } from "@/hooks/useOptimistic";
import { Favorite, ToggleFavoriteInput } from "@/interfaces/entities/Favorite";
import clsx from "clsx";
import { useParams } from "next/navigation";

interface Props {
  favorite: boolean;
  action: (toggleFavoriteInput: ToggleFavoriteInput) => Promise<Favorite>;
}

export const ToggleFavoriteClient = ({ favorite, action }: Props) => {
  const { id = "" } = useParams();

  const [optimisticFavorite, setOptimisticFavorite, handleOptimisticUpdate] =
    useOptimistic(favorite);

  const handleClick = async () => {
    setOptimisticFavorite((prev) => !prev);
    await handleOptimisticUpdate(() => action({ imdb_id: id as string }));
  };

  return (
    <Button
      text={`${optimisticFavorite ? "Remove" : "Add"} Favorite`}
      className={clsx("mt-10", {
        "bg-red-500 hover:bg-red-400": optimisticFavorite,
      })}
      onClick={handleClick}
    />
  );
};