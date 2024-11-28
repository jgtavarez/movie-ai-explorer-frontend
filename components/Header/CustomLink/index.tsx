"use client";
import { usePathname } from "next/navigation";

interface Props {
  text: string;
  href: string;
}

export const CustomLink = ({ text, href }: Props) => {
  const pathname = usePathname();
  const isActive = href === '/home' ?
    pathname === '/home' :
    pathname.startsWith(href);

  return (
    <li key={href}>
      <a
        href={href}
        className={`block py-2 pr-4 pl-3 ${isActive ? "text-blue-500" : "text-gray-400 dark:text-white"
          } lg:p-0`}
      >
        {text}
      </a>
    </li>
  );
};
