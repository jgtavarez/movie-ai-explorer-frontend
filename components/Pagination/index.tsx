"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePagination } from "../../hooks/usePagination";

interface Props {
  totalResults: number;
}

export const Pagination = ({ totalResults }: Props) => {
  const { createHref, currentPage, allPages } = usePagination(totalResults);

  return (
    <div className="flex text-center justify-center mt-10 mb-9">
      <nav aria-label="pagination">
        <ul className="flex list-style-none">
          <li>
            <Link
              className="pagination-no-selected"
              href={createHref(currentPage - 1)}
            >
              <h1>{`<`}</h1>
            </Link>
          </li>

          {allPages.map((page) => (
            <li key={page}>
              <Link
                className={clsx("pagination-no-selected", {
                  "bg-blue-500 dark:hover:bg-blue-500 text-white dark:text-white hover:bg-blue-600":
                    page === currentPage,
                })}
                href={createHref(page)}
              >
                {page}
              </Link>
            </li>
          ))}

          <li>
            <Link
              className="pagination-no-selected"
              href={createHref(currentPage + 1)}
            >
              <h1>{`>`}</h1>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
