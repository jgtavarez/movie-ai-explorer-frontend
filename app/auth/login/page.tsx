import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
          Login
        </h2>
        <p className="mt-3 text-gray-500 dark:text-gray-300">
          Sign in to access your account
        </p>
      </div>

      <div className="mt-8">
        <form>
          {/* Email */}
          <div>
            <Label
              htmlFor="email"
              text="Email"
              className="text-sm text-gray-600 dark:text-gray-200"
            />
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
            />
          </div>

          {/* Password */}
          <div className="mt-6">
            <div className="flex justify-between mb-2">
              <Label
                htmlFor="password"
                text="Password"
                className="text-sm text-gray-600 dark:text-gray-200"
              />
            </div>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
            />
          </div>

          {/* Button */}
          <div className="mt-6">
            <Button text="Sign in" />
          </div>
        </form>

        <p className="mt-6 text-sm text-center text-gray-400">
          Don&apos;t have an account yet?
          <Link
            href={"register"}
            className="text-blue-500 focus:outline-none focus:underline hover:underline ml-2"
          >
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
}
