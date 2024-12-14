import { getAiReview } from "@/lib/queries/movies";
import { GenerateStars } from "../SecondaryColumn/Rating/GenerateStars";

interface Props {
  imdbId: string;
}

export default async function AiReview({ imdbId }: Props) {
  const aiReview = await getAiReview(imdbId);

  return (
    <div className="space-y-10">
      <div className="flex flex-col sm:flex-row">
        <div className="order-2 mt-6 sm:ml-16 sm:mt-0">
          <h3 className="text-sm font-medium title-theme">{aiReview.title}</h3>
          <div className="mt-3 space-y-6 text-sm description-theme">
            <p>
              {aiReview.description === "N/A"
                ? "I don't have enough information about the content to be able to make a specific review."
                : aiReview.description}
            </p>
          </div>
        </div>

        <div className="order-1 flex items-center sm:flex-col sm:items-start">
          <div className="ml-4 sm:ml-0 sm:mt-4">
            <p className="text-sm font-medium title-theme">AI Review</p>
            <div className="mt-2">
              <GenerateStars
                stars={aiReview.score === "N/A" ? 0 : +aiReview.score}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
