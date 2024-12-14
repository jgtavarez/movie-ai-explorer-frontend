import Link from "next/link";
import { ArrowIcon } from "@/components/icon";
import { timeAgo } from "@/lib/time";
import { Blog } from "@/interfaces/entities/Blog";

interface Props {
  blog: Blog;
}

export const BlogCard = ({ blog }: Props) => {
  return (
    <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-5 text-gray-500">
        <span className="inline-flex"></span>
        <span className="text-sm">{timeAgo(blog.created)}</span>
      </div>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Link href={`/home/blogs/${blog.slug}`}>{blog.title}</Link>
      </h2>
      <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
        {blog.content[0]}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4"></div>
        <Link
          href={`/home/blogs/${blog.slug}`}
          className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
        >
          Read more
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
};
