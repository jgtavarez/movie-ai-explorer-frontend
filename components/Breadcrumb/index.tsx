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
    <nav aria-label="Breadcrumb">
      <ol
        role="list"
        className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
      >
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
            <li key={crumb.text}>
              <div className="flex items-center">
                <a
                  href={crumb.href}
                  className="mr-2 text-sm font-bold dark:text-white"
                >
                  {crumb.text}
                </a>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
          )
        )}
      </ol>
    </nav>
  );
};
