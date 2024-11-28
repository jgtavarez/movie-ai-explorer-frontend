"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
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
  const [isPending, startTransition] = useTransition();
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
    <form
      action={() => {
        startTransition(async () => {
          await action({ categories: selectedCategories });
          router.push("/home/profile");
        });
      }}
    >
      <div className="flex flex-row flex-wrap gap-5 mt-8 justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`flex flex-col items-center group gap-2 cursor-pointer`}
            onClick={(e) => {
              e.preventDefault();
              handleToggleCategory(category.id);
            }}
            disabled={isPending}
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
          </button>
        ))}
      </div>

      {/* Action */}
      <div className="mt-20 w-60 mx-auto">
        <Button type="submit" text="Save Preferences" loading={isPending} />
      </div>
    </form>
  );
};
