import { generatePaginationPages } from "@/lib/math";
import { usePathname, useSearchParams, redirect } from "next/navigation";

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

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === "...") {
      return `${pathName}?${params.toString()}`;
    }

    if (+pageNumber <= 0) {
      return `${pathName}`;
    }

    if (+pageNumber > totalPages) {
      return `${pathName}?${params.toString()}`;
    }

    params.set("page", pageNumber.toString());
    return `${pathName}?${params.toString()}`;
  };

  const allPages = generatePaginationPages(currentPage, totalPages);

  return {
    createPageUrl,
    currentPage,
    allPages,
  };
};
