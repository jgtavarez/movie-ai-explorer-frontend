import { getAllBlogs } from "@/actions/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LatestBlogsSection = async () => {
  const blogs = await getAllBlogs();

  return (
    <>
      <div className="relative h-64 rounded-md overflow-hidden bg-cover bg-center">
        <Image
          src={blogs[0].image}
          alt={blogs[0].title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center h-full">
          <div className="px-10 max-w-xl">
            <h2 className="text-2xl text-white font-semibold">
              {blogs[0].title}
            </h2>
            <p className="mt-2 text-gray-400 overflow-hidden text-ellipsis text-nowrap">
              {blogs[0].content[0]}
            </p>
            <Link href={`/home/blogs/${blogs[0].slug}`}>
              <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                <span>Read More</span>
                <svg
                  className="h-5 w-5 mx-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row mt-8 md:-mx-4">
        {blogs.slice(1, 3).map((blog) => (
          <div
            key={blog.slug}
            className="relative w-full h-64 md:mx-4 rounded-md overflow-hidden md:w-1/2"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">
                  {blog.title}
                </h2>
                <p className="mt-2 text-gray-400 overflow-hidden text-ellipsis text-nowrap">
                  {blog.content[0]}
                </p>
                <Link href={`/home/blogs/${blogs[0].slug}`}>
                  <button className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                    <span>Read More</span>
                    <svg
                      className="h-5 w-5 mx-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
