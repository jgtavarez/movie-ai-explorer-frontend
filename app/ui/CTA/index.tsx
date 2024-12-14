import { Button } from "@/components/ui";
import Link from "next/link";

export const CTA = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Start exploring now
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Movie AI Explorer is completely free. No credit card required.
          </p>
          <Link href={"/auth/register"} className="inline-flex">
            <Button text="Get started" />
          </Link>
        </div>
      </div>
    </section>
  );
};
