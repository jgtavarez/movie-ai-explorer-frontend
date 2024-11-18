"use server";
import { notFound } from "next/navigation";
import { Blog } from "../../interfaces/entities/Blog";

export const getBlog = async (slug: string): Promise<Blog> => {
  const blogs = await getAllBlogs();

  const data = blogs.find((blog) => blog.slug === slug);
  if (!data) {
    notFound();
  }

  return data;
};

export const getAllBlogsPaths = async (): Promise<string[]> => {
  const blogs = await getAllBlogs();

  return blogs.map((blog) => blog.slug);
};

export const getAllBlogs = async (): Promise<Blog[]> => {
  const data: Blog[] = await fetch(`${process.env.CLIENT_URL}/posts.json`).then(
    (res) => res.json()
  );

  return data;
};
