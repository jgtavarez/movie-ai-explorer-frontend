import { CardsGrid } from "@/components/CardsGrid";
import { SkeletonCard } from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg mt-6 lg:mt-8">
      <CardsGrid>
        {[...Array(11)].map((_, i) => (
          <SkeletonCard key={`grid_1_${i}`} />
        ))}
      </CardsGrid>
    </div>
  );
}
