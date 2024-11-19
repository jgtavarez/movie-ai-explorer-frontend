"use client";
import clsx from "clsx";
import { useParams } from "next/navigation";
import { Favorite, ToggleFavoriteInput } from "../../../../../../../../interfaces/entities/Favorite";
import { useOptimistic } from "../../../../../../../../hooks/useOptimistic";
import { Button } from "../../../../../../../../components/ui";

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
    await handleOptimisticUpdate(() => action({ imdbId: id as string }));
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
