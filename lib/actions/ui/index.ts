"use server";
import { cookies } from "next/headers";

export const toggleTheme = async () => {
  const theme = (await cookies()).get("theme")?.value;
  const cookieStore = await cookies();

  if (!theme) {
    cookieStore.set("theme", "dark", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });
  } else {
    cookieStore.delete("theme");
  }
};
