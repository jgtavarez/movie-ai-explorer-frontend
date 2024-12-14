import { CardGrid } from "@/components/layouts/CardGrid";
import { Container } from "@/components/layouts/Container";
import { SkeletonCard } from "@/components/SkeletonCard";

export default function Loading() {
  return (
    <Container>
      <CardGrid>
        {[...Array(11)].map((_, i) => (
          <SkeletonCard key={`grid_1_${i}`} />
        ))}
      </CardGrid>
    </Container>
  );
}
