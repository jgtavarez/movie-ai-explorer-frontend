import { verifySession } from "@/lib/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await verifySession();

  if (session?.id) {
    redirect("/home");
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <div className="hidden lg:block lg:w-2/3 relative">
          <Image
            src="https://images.unsplash.com/photo-1514899706957-d22ee867a77b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Background image"
            layout="fill"
            objectFit="cover"
            quality={80}
            priority
          />
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40 relative z-10">
            <div>
              <h2 className="text-4xl font-bold text-white">
                Movie AI Explorer
              </h2>
              <p className="max-w-xl mt-3 text-gray-300">
                Dive into the world of cinema with our intelligent movie
                recommendation app. Search for your favorite movies, explore
                detailed information, and get personalized recommendations based
                on genres, directors, and actors you love. Perfect for movie
                enthusiasts, it helps you discover new films that match your
                tastes and spark your curiosity.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
