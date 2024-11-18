import { LatestBlogsSection } from "./(page)/ui/LatestBlogsSection";
import { TrendingSection } from "./(page)/ui/TrendingSection";
import { UserRecommendations } from "./(page)/ui/UserRecommendations";

export default async function HomePage() {
  return (
    <main className="my-8">
      <div className="container mx-auto px-6">
        <LatestBlogsSection />
        <TrendingSection />
        <UserRecommendations />
      </div>
    </main>
  );
}
