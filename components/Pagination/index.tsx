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
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href={createPageUrl(currentPage - 1)}
            >
              <h1>{`<`}</h1>
            </Link>
          </li>

          {allPages.map((page) => (
            <li key={page} className="page-item">
              <Link
                className={clsx(
                  "page-link relative block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
                  {
                    "bg-blue-500 shadow-sm text-white hover:text-white hover:bg-blue-600":
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
              className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
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
