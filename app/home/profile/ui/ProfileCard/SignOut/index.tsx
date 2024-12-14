"use client";
import { useTransition } from "react";
import { Button } from "@/components/ui";
import { signout } from "@/lib/actions/auth/signout";

export const SignOut = () => {
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <Button
        text="Sign Out"
        onClick={() => {
          startTransition(async () => {
            signout();
          });
        }}
        loading={isPending}
        variant="secondary"
        className="w-24"
      />
    </>
  );
};
