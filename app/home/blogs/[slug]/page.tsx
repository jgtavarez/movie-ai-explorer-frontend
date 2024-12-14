import { getAllBlogsSlugs, getBlog } from "@/lib/queries/blogs";
import { Metadata } from "next";
import { RenderBlog } from "./ui/RenderBlog";

interface Props {
  params: Promise<{ slug: string }>;
}

// Prerender the params from `generateStaticParams` at build time and 404 for unknown paths
export const dynamicParams = false;

// Incremental Static Regeneration
export async function generateStaticParams() {
  const slugs = await getAllBlogsSlugs();

  const staticParams = slugs.map((slug) => ({
    slug: slug,
  }));

  return staticParams;
}

// Set Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  try {
    const blog = await getBlog(slug);

    return {
      title: blog.title,
      description: blog.content[0],
    };
  } catch (error) {
    console.error(error);
    return {
      title: "",
      description: "",
    };
  }
}

export default async function BlogPage({ params }: Props) {
  const slug = (await params).slug;
  const blog = await getBlog(slug);

  return <RenderBlog blog={blog} />;
}
