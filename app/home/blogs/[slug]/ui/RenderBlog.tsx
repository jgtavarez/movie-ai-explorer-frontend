import { Blog } from "@/interfaces/entities/Blog";
import { formatDate } from "@/lib/time";
import Image from "next/image";

interface Props {
  blog: Blog;
}

const BlogHeader = ({ blog }: Props) => {
  return (
    <header className="mb-4 lg:mb-6 not-format">
      <address className="flex items-center mb-6 not-italic">
        <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
          <div>
            <p className="text-base text-gray-500 dark:text-gray-400">
              <time dateTime="2022-02-08" title="February 8th, 2022">
                {formatDate(blog.created)}
              </time>
            </p>
          </div>
        </div>
      </address>
      <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white title-theme">
        {blog.title}
      </h1>
    </header>
  );
};

const BlogContent = ({ blog }: Props) => {
  return (
    <div className="flex flex-col gap-5 description-theme text-start">
      <Image
        src={blog.image}
        alt={blog.slug}
        width={672}
        height={300}
        className="rounded-md"
      />
      {blog.content.map((c, i) => (
        <p key={i} className="lead">
          {c}
        </p>
      ))}
    </div>
  );
};

export const RenderBlog = ({ blog }: Props) => {
  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          {/* Header */}
          <BlogHeader blog={blog} />

          {/* Content */}
          <BlogContent blog={blog} />
        </article>
      </div>
    </main>
  );
};
