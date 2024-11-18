"use server";
import { promises as fs } from "fs";
import { notFound } from "next/navigation";
import path from "path";
import { Blog } from "../../interfaces/entities/Blog";

export const getBlog = async (slug: string): Promise<Blog> => {
  try {
    const file = await fs.readFile(
      process.cwd() + `/posts/${slug}.json`,
      "utf8"
    );
    const blog: Blog = JSON.parse(file);
    return blog;
  } catch (error) {
    console.error(error);
    notFound();
  }
};

export const getAllBlogsPaths = async (): Promise<string[]> => {
  const files = await fs.readdir(process.cwd() + `/posts`, "utf8");
  const paths = files.map((file) => path.basename(file, ".json"));

  return paths;
};

export const getAllBlogs = async (): Promise<Blog[]> => {
  const files = await fs.readdir(process.cwd() + `/posts`, "utf8");

  const results = await Promise.allSettled(
    files.map((file) => fs.readFile(process.cwd() + `/posts/${file}`, "utf8"))
  );
  const validBlogs = results
    .filter((result) => result.status === "fulfilled")
    .map((result) => result.value);

  return validBlogs.map((v) => JSON.parse(v));
};
