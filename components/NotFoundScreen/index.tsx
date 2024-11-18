import Link from "next/link";
import { Button } from "../ui";

export const NotFoundScreen = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center">
      <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div className="max-w-md">
          <div className="text-5xl font-dark font-bold">
            Uppsss...
            <strong> 404 </strong>
          </div>
          <br />
          <br />
          <p className="text-2xl md:text-3xl font-light leading-normal">
            <strong>Resource Not Found</strong>
          </p>
          <br />
          <br />

          <p className="mb-8">
            Check if the search term is correct. If you think this is an error,
            contact support <strong>Thanks!</strong>
            <br />
          </p>

          <Link href="/home">
            <Button text="Go Home" />
          </Link>
        </div>
      </div>
    </div>
  );
};
