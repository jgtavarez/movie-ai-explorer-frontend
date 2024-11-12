import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
          Register
        </h2>
        <p className="mt-3 text-gray-500 dark:text-gray-300">
          Sign up to access your account
        </p>
      </div>

      <div className="mt-8">
        <form>
          {/* Email */}
          <div>
            <Label
              htmlFor="email"
              text="Email"
              className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
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
            <Button text="Sign up" />
          </div>
        </form>

        <p className="mt-6 text-sm text-center text-gray-400">
          Do you already have an account?
          <Link
            href={"login"}
            className="text-blue-500 focus:outline-none focus:underline hover:underline ml-2"
          >
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
}
