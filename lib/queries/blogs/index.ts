import { Blog } from "@/interfaces/entities/Blog";
import { notFound } from "next/navigation";

export const getBlog = async (slug: string): Promise<Blog> => {
  const blogs = await getAllBlogs();

  const data = blogs.find((blog) => blog.slug === slug);
  if (!data) {
    notFound();
  }

  return data;
};

export const getAllBlogsSlugs = async (): Promise<string[]> => {
  const blogs = await getAllBlogs();

  return blogs.map((blog) => blog.slug);
};

export const getAllBlogs = async (): Promise<Blog[]> => {
  const data: Blog[] = await fetch(`${process.env.CLIENT_URL}/posts.json`, {
    cache: "force-cache",
  }).then((res) => res.json());

  return data;
};
