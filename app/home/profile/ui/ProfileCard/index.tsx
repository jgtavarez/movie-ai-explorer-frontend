import React from "react";
import { SignOut } from "../SignOut";
import { User } from "@/interfaces/entities/User";
import Link from "next/link";
import { Button } from "@/components/ui";

interface Props {
  user: User;
}

export const ProfileCard = ({ user }: Props) => {
  return (
    <section className="relative py-16 container mx-auto px-4">
      <div className="flex flex-col min-w-0 break-words bg-white dark:bg-gray-900  w-full mb-6 shadow-xl rounded-lg -mt-64 px-6">
        {/* Top */}
        <div className="flex justify-between">
          <div className="shadow-xl rounded-full absolute -mt-16 left-0 right-0 m-auto bg-blue-500 w-36 h-36 flex items-center justify-center">
            <span className="text-white font-bold text-4xl">
              {user.name.charAt(0)}
            </span>
          </div>
          <div className="lg:w-4/12 lg:order-1">
            <div className="flex justify-center py-4 lg:pt-4 pt-8">
              <div className="py-3 text-center">
                
              </div>
            </div>
          </div>
          <div className="lg:w-4/12 lg:order-1">
            <div className="flex justify-center py-4 lg:pt-4 pt-8">
              <div className="py-3 text-center">
                <SignOut />
              </div>
            </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="text-center mt-12">
          <h3 className="text-4xl font-semibold leading-normal mb-2 title-theme">
            {user.name}
          </h3>
        </div>

        {/* Description */}
        <div className="mt-10 py-10 border-t border-gray-200 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-9/12 px-4">
              <p className="mb-4 text-base leading-relaxed description-theme">
                {user.categories.length ? (
                  <>
                    <p className="mb-4 description-theme">
                      Here’s a quick look at your favorites categories! These
                      represent your interests <br /> and help us provide you
                      with the best recommendations:
                    </p>
                    <div className="mb-4 description-theme">
                      <span className="font-bold capitalize">
                        {user.categories.map((c) => c.title).join(" - ")}
                      </span>
                    </div>
                    <p className="mb-4 description-theme">
                      Feel free to update your choices anytime to refine your
                      experience further!
                    </p>
                  </>
                ) : (
                  <p className="mb-4 leading-relaxed description-theme">
                    You currently don&apos;t have any movie categories selected.
                    Take a moment to choose some that resonate with your
                    interests, this will help us get to know you better and
                    provide personalized recommendations that suit your
                    preferences!
                  </p>
                )}
              </p>
              <Link href="/home/profile/categories">
                <Button
                  text="Edit Categories"
                  style={{
                    maxWidth: "18rem",
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
