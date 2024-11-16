import { Fragment } from "react";
import { StarIcon } from "@/components/Icons/StarIcon";

interface Props {
  stars: number;
}

export const GenerateStars = ({ stars }: Props) => {
  const rating = Math.max(1, Math.min(5, stars));

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Fragment key={`StarIcon_${i}`}>
          {i < rating ? (
            <StarIcon color="text-gray-900" />
          ) : (
            <StarIcon color="text-gray-400" />
          )}
        </Fragment>
      ))}
    </div>
  );
};
