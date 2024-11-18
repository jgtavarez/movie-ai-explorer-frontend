"use server";
import { deleteSession } from "@/lib/auth";

export const signout = () => {
  deleteSession();
};
