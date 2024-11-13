"use server";
import { AuthResponse, LoginInput } from "@/interfaces/auth";
import { createSession } from "@/lib/auth";
import { baseApi, DataError } from "@/lib/axios";
import { redirect } from "next/navigation";
import { z } from "zod";

const LOGIN_SCHEMA = z.object({
  email: z.string().email({ message: "Invalid email" }).trim(),
  password: z.string().trim().min(1, { message: "Required" }),
});

export const loginApiCall = async (
  loginInput: LoginInput
): Promise<AuthResponse> => {
  const response = await baseApi.post("/auth/login", loginInput);
  return response.data;
};

export async function loginAction(
  prevState: string | undefined,
  formData: FormData
): Promise<any> {
  const parsedCredentials = LOGIN_SCHEMA.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsedCredentials.success) {
    return {
      errors: parsedCredentials.error.flatten().fieldErrors,
    };
  }

  try {
    const { jwt } = await loginApiCall({ ...parsedCredentials.data });
    await createSession({ jwt });
    redirect("/home");
  } catch (error: any) {
    // if (error?.message === "NEXT_REDIRECT") {
    //   throw error;
    // }

    const dataError = error.response.data as DataError;
    const errorMessages = Array.isArray(dataError.message)
      ? dataError.message
      : [dataError.message];

    return {
      errors: {
        customs: errorMessages,
      },
    };
  }
}
