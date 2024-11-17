import React from "react";
import { SignOut } from "../SignOut";
import { User } from "@/interfaces/entities/User";

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
                <span className="text-xl font-bold block uppercase tracking-wide title-theme">
                  22
                </span>
                <span className="text-sm description-theme">Favorites</span>
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
          <div className="text-sm leading-normal mt-0 mb-2 font-bold uppercase description-theme">
            <i className="fas fa-map-marker-alt mr-2 text-lg"></i>
            Los Angeles, California
          </div>
          <div className="mb-2  mt-10 title-theme">
            <i className="mr-2 text-lg"></i>
            Solution, Manager, Creative, Tim & Officer
          </div>
        </div>
        {/* Description */}
        <div className="mt-10 py-10 border-t border-gray-200 text-center">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-9/12 px-4">
              <p className="mb-4 text-lg leading-relaxed description-theme">
                An artist of considerable range, Jenna the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure. An artist of considerable
                range.
              </p>
              <a href="#pablo" className="font-normal text-pink-500">
                Edit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
