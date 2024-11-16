"use client";
interface Props {
  crumbs?: { text: string; href: string }[];
}

export const Breadcrumb = ({ crumbs }: Props) => {
  const generateDynamicCrumbs = () => {
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    return pathSegments.map((segment, index) => ({
      text: segment.charAt(0).toUpperCase() + segment.slice(1),
      href: `/${pathSegments.slice(0, index + 1).join("/")}`,
    }));
  };

  const breadcrumbs =
    crumbs && crumbs.length > 0 ? crumbs : generateDynamicCrumbs();

  return (
    <nav>
      <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {breadcrumbs.map((crumb, i) =>
          i === breadcrumbs.length - 1 ? (
            <li key={crumb.text} className="text-sm">
              <span
                aria-current="page"
                className="text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                {crumb.text}
              </span>
            </li>
          ) : (
            <li key={crumb.text} className="text-sm font-bold dark:text-white">
              <a href={crumb.href} className="mr-2">
                {crumb.text}
              </a>
              <span>\</span>
            </li>
          )
        )}
      </ol>
    </nav>
  );
};
