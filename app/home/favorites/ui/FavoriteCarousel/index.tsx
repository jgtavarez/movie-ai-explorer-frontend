"use client";
import { FavoriteCard } from "@/app/home/favorites/ui/FavoriteCarousel/FavoriteCard.tsx/FavoriteCard";
import { Favorite } from "@/interfaces/entities/Favorite";
import React, { useRef, useState } from "react";

interface Props {
  favorites: Favorite[];
}

export const FavoriteCarousel = ({ favorites }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(0);

  const goNext = () => {
    const sliderWidth = sliderRef.current?.scrollWidth || 0;
    const newTransform = transform - 390;
    setTransform(
      Math.abs(newTransform) >= sliderWidth / 1.7 ? 0 : newTransform
    );
  };

  const goPrev = () => {
    setTransform(transform === 0 ? 0 : transform + 390);
  };

  return (
    <div
      className="flex items-center justify-center w-full"
      style={{
        minHeight: "80vh",
      }}
    >
      <div className="w-full relative flex items-center justify-center">
        <li
          className="block py-1.5 px-3 transition-all duration-300 rounded-full  bg-gray-100 hover:bg-gray-300 hover:text-white absolute z-30 left-0 ml-6 cursor-pointer"
          onClick={goPrev}
        >
          <h1>{`<`}</h1>
        </li>
        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
          <div
            ref={sliderRef}
            style={{ transform: `translateX(${transform}px)` }}
            className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
          >
            {favorites.map((favorite, i) => (
              <FavoriteCard key={favorite.id} favorite={favorite} counter={i} />
            ))}
          </div>
        </div>
        <li
          className="block py-1.5 px-3 transition-all duration-300 rounded-full  bg-gray-100 hover:bg-gray-300 hover:text-white absolute z-30 right-0 mr-6 cursor-pointer"
          onClick={goNext}
        >
          <h1>{`>`}</h1>
        </li>
      </div>
    </div>
  );
};
