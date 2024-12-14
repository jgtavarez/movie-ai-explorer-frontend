import { StarIcon } from "@/components/icon";
import { Fragment } from "react";

interface Props {
  stars: number;
}

export const GenerateStars = ({ stars }: Props) => {
  const rating = Math.max(0, Math.min(5, stars));

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Fragment key={`StarIcon_${i}`}>
          {i < rating ? (
            <StarIcon color="text-gray-900 dark:text-gray-400" />
          ) : (
            <StarIcon color="text-gray-400 dark:text-gray-900" />
          )}
        </Fragment>
      ))}
    </div>
  );
};
