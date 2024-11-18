"use client";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { registerAction } from "../../../../actions/auth/register";
import { Button, Input, Label } from "../../../../components/ui";
import { ErrorsList } from "../../../../components/ErrorsList";

export const RegisterForm = () => {
  const [state, action] = useFormState(registerAction, undefined);

  return (
    <div className="mt-8">
      <form action={action}>
        {/* Name */}
        <div>
          <Label htmlFor="name" text="Full Name" />
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Your Full Name"
            errors={state?.errors?.name}
          />
        </div>

        {/* Email */}
        <div className="mt-2">
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

        {/* Confirm Password */}
        <div className="mt-2">
          <Label htmlFor="confirmPassword" text="Confirm Password" />
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Your Password"
            errors={state?.errors?.confirmPassword}
          />
        </div>

        {/* Button */}
        <InputSubmit />

        {state?.errors?.customs && <ErrorsList errors={state.errors.customs} />}
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
  );
};

export function InputSubmit() {
  const { pending } = useFormStatus();

  return (
    <div className="mt-6">
      <Button text="Sign up" id="submit" type="submit" disabled={pending} />
    </div>
  );
}
