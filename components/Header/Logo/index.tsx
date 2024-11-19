import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
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
  );
};
