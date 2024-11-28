import { GithubIcon, LinkedinIcon } from "@/components/icon";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="p-4 bg-gray-50 sm:p-6 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <span className="flex items-center">
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                height={36}
                width={35}
                alt="App Logo"
              />
            </span>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()} Movie AI Explorer. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://github.com/jgtavarez"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com/in/jgtavarez"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
