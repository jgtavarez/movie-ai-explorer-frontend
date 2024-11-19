import { ReactNode } from "react";

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

export const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <div>
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
        {feature.icon}
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">
        {feature.title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
    </div>
  );
};
