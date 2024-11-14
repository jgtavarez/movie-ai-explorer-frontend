"use client";
import { usePagination } from "@/hooks/usePagination";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  totalResults: number;
}

export const Pagination = ({ totalResults }: Props) => {
  const { createPageUrl, currentPage, allPages } = usePagination(totalResults);

  return (
    <div className="flex text-center justify-center mt-10 mb-32">
      <nav aria-label="pagination">
        <ul className="flex list-style-none">
          <li className="page-item">
            <Link
              className="pagination-no-selected"
              href={createPageUrl(currentPage - 1)}
            >
              <h1>{`<`}</h1>
            </Link>
          </li>

          {allPages.map((page) => (
            <li key={page} className="page-item">
              <Link
                className={clsx(
                  "pagination-no-selected",
                  {
                    "bg-blue-500 dark:hover:bg-blue-500 text-white dark:text-white hover:bg-blue-600":
                      page === currentPage,
                  }
                )}
                href={createPageUrl(page)}
              >
                {page}
              </Link>
            </li>
          ))}

          <li className="page-item">
            <Link
              className="pagination-no-selected"
              href={createPageUrl(currentPage + 1)}
            >
              <h1>{`>`}</h1>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
