import { Container } from "@/components/layouts/Container";
import { BlogCard } from "./ui/BlogCard";
import { getAllBlogs } from "@/lib/queries/blogs";

export default async function BlogsPage() {
  const blogs = await getAllBlogs();

  return (
    <Container>
      <section className="bg-white dark:bg-gray-900 rounded-lg">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Our Blogs
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Explore our blog for captivating insights, in-depth analyses, and
              the latest trends in cinema and storytelling.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {blogs.map((blog) => (
              <BlogCard key={blog.title} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
