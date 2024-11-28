import {
  BlogsIcon,
  FavoriteIcon,
  SparkleIcon,
  StarIcon,
} from "../../../components/icon";
import { Feature, FeatureCard } from "./FeatureCard";

const FEATURES: Feature[] = [
  {
    title: "Explore",
    description:
      "Explore millons of movies, TV series and episodes with our movie explorer. select what you want and explore all the details you need.",
    icon: <StarIcon color="text-yellow-500" />,
  },
  {
    title: "Blogs",
    description:
      "Read the latest news, reviews and more about movies and TV series writted by experts.",
    icon: <BlogsIcon />,
  },
  {
    title: "Favorite",
    description:
      "Manage your own favorite list and save your favorite movies to easily find them whenever you want.",
    icon: <FavoriteIcon />,
  },
  {
    title: "AI Recommendations",
    description:
      "Get personalized user recommendations for movies and TV series based on your favorite categories and similar movies.",
    icon: <SparkleIcon />,
  },
  {
    title: "AI Chatbot",
    description:
      "Talk with our AI movie expert assistant chatbot, get personalized recommendations, details, curiosities and any other information you want to ask.",
    icon: <SparkleIcon />,
  },
  {
    title: "AI Reviews",
    description:
      "Our AI will review any movie or TV series and give you a honest detailed review. Forget about those fake or paid reviews.",
    icon: <SparkleIcon />,
  },
];

export const Features = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            Designed by movie fans like you
          </h2>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
