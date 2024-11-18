import { usePathname, useSearchParams, redirect } from "next/navigation";
import { generatePaginationPages } from "../lib/math";

const PER_PAGE = 10;

export const usePagination = (totalResults: number) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const pageString = searchParams.get("page") ?? "1";

  const totalPages = Math.ceil(totalResults / PER_PAGE);
  const currentPage = isNaN(+pageString) ? 1 : +pageString;
  if (currentPage < 1 || isNaN(+pageString)) {
    redirect(pathName);
  }

  const createHref = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    // no change page
    if (pageNumber === "..." || +pageNumber <= 0 || +pageNumber > totalPages) {
      return `${pathName}?${params.toString()}`;
    }

    // set new page
    params.set("page", pageNumber.toString());
    return `${pathName}?${params.toString()}`;
  };

  const allPages = generatePaginationPages(currentPage, totalPages);

  return {
    createHref,
    currentPage,
    allPages,
  };
};
