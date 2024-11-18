import { scoreToStars } from "../../../../../../../lib/math";
import { GenerateStars } from "./GenerateStars";

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

export const Rating = ({ source, score }: Props) => {
  const numericScore = parseFloat(score);

  if (!isNaN(numericScore)) {
    return (
      <div>
        <p className="text-3xl tracking-tight title-theme">{source}</p>
        <div className="mt-3">
          <div className="flex items-center">
            <GenerateStars
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
