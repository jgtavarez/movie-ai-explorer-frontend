"use server";
import { cookies } from "next/headers";
export const toggleTheme = () => {
  const theme = cookies().get("theme")?.value;

  if (!theme) {
    cookies().set("theme", "dark", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });
  } else {
    cookies().delete("theme");
  }
};
