import { scoreToStars } from "../../../../../../lib/math";
import { StarsRating } from "../StarsRating";

interface Props {
  source: "Metascore" | "IMDb Rating";
  score: string;
}

const handleSourceScoreBase = (source: Props["source"]) => {
  if (source === "Metascore") {
    return 100;
  }
  return 10;
};

export const ExtraRating = ({ source, score }: Props) => {
  const numericScore = parseFloat(score);

  if (!isNaN(numericScore)) {
    return (
      <div>
        <p className="text-3xl tracking-tight text-gray-900">{source}</p>
        <div className="mt-3">
          <div className="flex items-center">
            <StarsRating
              stars={scoreToStars(numericScore, handleSourceScoreBase(source))}
            />
            <span className="ml-3 text-sm font-medium text-teal-600 hover:text-cyan-500">
              {`${score} / ${handleSourceScoreBase(source)}`}
            </span>
          </div>
        </div>
      </div>
    );
  }
};
