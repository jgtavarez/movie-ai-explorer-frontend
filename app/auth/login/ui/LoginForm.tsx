"use client";
import { loginAction } from "@/actions/auth/login";
import { ErrorsList } from "@/components/ErrorsList";
import { Button, Input, Label } from "@/components/ui";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";

export const LoginForm = () => {
  const [state, action] = useFormState(loginAction, undefined);

  return (
    <div className="mt-8">
      <form action={action}>
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
            errors={state?.errors?.email}
          />
        </div>

        {/* Password */}
        <div>
          <Label
            htmlFor="password"
            text="Password"
            className="text-sm text-gray-600 dark:text-gray-200"
          />
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
            errors={state?.errors?.password}
          />
        </div>

        {/* Button */}
        <InputSubmit />

        {state?.errors?.customs && <ErrorsList errors={state.errors.customs} />}
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

export function InputSubmit() {
  const { pending } = useFormStatus();

  return (
    <div className="mt-6">
      <Button text="Sign in" id="submit" type="submit" disabled={pending} />
    </div>
  );
}