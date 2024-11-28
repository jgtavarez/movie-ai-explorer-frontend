"use client";
import Link from "next/link";
import { CustomLink } from "./CustomLink";
import { ToggleDarkMode } from "./ToggleDarkMode";
import { useState } from "react";
import { ProfileIcon } from "../icon/ProfileIcon";
import { usePathname } from "next/navigation";
import { Button } from "../ui";
import { Logo } from "./Logo";
import { MobileMenuIcon } from "../icon";

const links = [
  {
    text: "Home",
    href: "/home",
  },
  {
    text: "Movies",
    href: "/home/movies",
  },
  {
    text: "Favorites",
    href: "/home/favorites",
  },
  {
    text: "Blogs",
    href: "/home/blogs",
  },
  {
    text: "Chatbot",
    href: "/home/chatbot",
  },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const insideHome = pathname?.startsWith("/home");

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Logo />

          {/* Extras */}
          <div className="flex items-center lg:order-2">
            <ToggleDarkMode />
            {insideHome ? (
              <>
                <Link className="flex mx-3 rounded-full" href={"/home/profile"}>
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <ProfileIcon />
                  </div>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <MobileMenuIcon />
                </button>
              </>
            ) : (
              <>
                <Link
                  href={"/auth/login"}
                  className="text-gray-800 dark:text-white hover:bg-gray-50 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                >
                  Log in
                </Link>
                <Link href={"/auth/register"}>
                  <Button text="Get started" />
                </Link>
              </>
            )}
          </div>

          {/* Links */}
          {insideHome && (
            <div
              className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${
                !isMenuOpen ? "hidden" : ""
              }`}
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {links.map((link) => (
                  <CustomLink key={link.href} {...link} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
