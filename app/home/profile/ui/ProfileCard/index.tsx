import Link from "next/link";
import { ProfileAvatar } from "./ProfileAvatar";
import { CategorySection } from "./CategorySection";
import { SignOut } from "./SignOut";
import { getUser } from "@/lib/queries/user";
import { Button } from "@/components/ui";

export const ProfileCard = async () => {
  const user = await getUser();

  return (
    <section className="relative py-16 container mx-auto px-4">
      <div className="flex flex-col min-w-0 break-words bg-white dark:bg-gray-900 w-full mb-6 shadow-xl rounded-lg -mt-64 px-6">
        <div className="flex justify-between">
          <ProfileAvatar />
          <div className="lg:w-4/12 lg:order-1 ml-auto">
            <div className="flex py-4 lg:pt-4 pt-8">
              <div className="py-3 text-center">
                <SignOut />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-4xl font-semibold leading-normal mb-2 title-theme">
            {user.name}
          </h3>
        </div>

        {/* Categories and edit */}
        <div className="mt-10 py-10 border-t border-gray-200 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-9/12 px-4">
              <CategorySection />
              <Link href="/home/profile/categories">
                <Button
                  text="Edit Categories"
                  style={{ maxWidth: "18rem" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
