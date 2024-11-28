"use client";
import { useTransition } from "react";
import { signout } from "../../../../../../actions/auth/signout";
import { Button } from "@/components/ui";

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
