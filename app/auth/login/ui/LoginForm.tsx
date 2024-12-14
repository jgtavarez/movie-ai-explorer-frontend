"use client";
import { useActionState } from "react";
import Link from "next/link";
import { ErrorsList } from "@/components/ErrorsList";
import { Button, Input, Label } from "@/components/ui";
import { login } from "@/lib/actions/auth/login";

export const LoginForm = () => {
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <div className="mt-8">
      <form action={action}>
        <fieldset disabled={pending}>
          {/* Email */}
          <div>
            <Label htmlFor="email" text="Email" />
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
              errors={state?.errors?.email}
            />
          </div>

          {/* Password */}
          <div className="mt-2">
            <Label htmlFor="password" text="Password" />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              errors={state?.errors?.password}
            />
          </div>

          {/* Button */}
          <div className="mt-6">
            <Button
              text="Sign in"
              id="submit"
              type="submit"
              loading={pending}
            />
          </div>

          {state?.errors?.customs && (
            <ErrorsList errors={state.errors.customs} />
          )}
        </fieldset>
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
  );
};
