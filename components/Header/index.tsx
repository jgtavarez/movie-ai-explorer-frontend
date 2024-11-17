import Link from "next/link";
import { CustomLink } from "./CustomLink";
import { ToggleDarkMode } from "./ToggleDarkMode";
import Image from "next/image";
import { ProfileIcon } from "../icons";

export const Header = () => {
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
      text: "Blogs",
      href: "/home/blogs",
    },
    {
      text: "Favorites",
      href: "/home/favorites",
    },
    {
      text: "Chatbot",
      href: "/home/chatbot",
    },
  ];

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link href={"/home"} className="flex items-center">
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              height={36}
              width={35}
              alt="App Logo"
              className="mr-3"
            />
            <span className="hidden sm:block self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Movie AI Explorer
            </span>
          </Link>

          {/* Extras */}
          <div className="flex items-center lg:order-2">
            <ToggleDarkMode />
            <Link className="flex mx-3 rounded-full" href={"/home/profile"}>
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <ProfileIcon />
              </div>
            </Link>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Links */}
          <div
            className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1 hidden"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {links.map((link) => (
                <CustomLink key={link.href} {...link} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
