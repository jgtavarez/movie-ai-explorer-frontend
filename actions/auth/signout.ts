"use server";
import { redirect } from "next/navigation";
import { deleteSession } from "../../lib/auth";

export const signout = () => {
  deleteSession();
  redirect("/");
};
