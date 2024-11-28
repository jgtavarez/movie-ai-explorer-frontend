import { LatestBlogsSection } from "./ui/LatestBlogsSection";
import { TrendingSection } from "./ui/TrendingSection";
import { LoadingIcon } from "@/components/icon";
import { Suspense } from "react";
import UserRecommendations from "./ui/UserRecommendations";

export default async function HomePage() {
  return (
    <main className="my-8">
      <div className="container mx-auto px-6">
        <LatestBlogsSection />
        <TrendingSection />
        <Suspense fallback={
          <div className="mt-14 mb-12 flex justify-start items-center text-sm title-theme">
            <LoadingIcon />
            <div>Loading...</div>
          </div>
        }>
          <UserRecommendations />
        </Suspense>
      </div>
    </main>
  );
}
