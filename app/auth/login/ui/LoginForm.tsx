"use client";
import { loginAction } from "@/actions/auth/login";
import { Button, Input, Label } from "@/components/ui";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

export const ErrorTooltip = ({ errors }: { errors: string[] }) => (
  <ul>
    {errors.map((error) => (
      <li
        style={{
          color: "red",
          fontSize: "0.9rem",
          listStyleType: errors.length > 1 ? "initial" : "none",
        }}
        key={error}
      >
        {error}
      </li>
    ))}
  </ul>
);

export const LoginForm = () => {
  const [state, action] = useActionState(loginAction, undefined);
  const { pending } = useFormStatus();

  return (
    <div className="mt-8">
      <form action={action}>
        <h3>{pending ? "true" : "false"}</h3>
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
            errors={state?.errors?.password}
          />
        </div>

        {/* Button */}
        {state?.errors?.customs && (
          <ErrorTooltip errors={state.errors.customs} />
        )}
        <InputSubmit />
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
