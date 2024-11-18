"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Category } from "../../../../../../interfaces/entities/Category";
import {
  UpdateUserInput,
  User,
} from "../../../../../../interfaces/entities/User";
import { Button } from "../../../../../../components/ui";

interface Props {
  categories: Category[];
  selected: string[];
  action: (updateUserInput: UpdateUserInput) => Promise<User>;
}

export const SelectCategories = ({ categories, selected, action }: Props) => {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(selected);

  const handleToggleCategory = (id: string) => {
    setSelectedCategories(
      (prev) =>
        prev.includes(id)
          ? prev.filter((category) => category !== id) // Remove
          : [...prev, id] // Add
    );
  };

  return (
    <>
      <div className="flex flex-row flex-wrap gap-5 mt-8 justify-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`flex flex-col items-center group gap-2 cursor-pointer`}
            onClick={() => handleToggleCategory(category.id)}
          >
            <Image
              alt={category.title}
              className={`rounded border-2 ${
                selectedCategories.includes(category.id)
                  ? "border-4 border-gray-600 dark:border-gray-200"
                  : "border-transparent hover:border-gray-600 dark:hover:border-gray-200"
              }`}
              src={category.image}
              width={150}
              height={150}
            />
            <p className={`capitalize text-gray-600 dark:text-gray-200`}>
              {category.title}
            </p>
          </div>
        ))}
      </div>

      {/* Action */}
      <div
        className="px-4 py-1 mt-20"
        onClick={async () => {
          await action({ categories: selectedCategories });
          router.push("/home/profile");
        }}
      >
        <Button text="Save Preferences" />
      </div>
    </>
  );
};
