/* eslint-disable @typescript-eslint/no-explicit-any */
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

export async function login(state: any, formData: FormData): Promise<any> {
  // Validate form fields
  const validatedFields = LOGIN_SCHEMA.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Create user session
  try {
    const { jwt, user } = await loginApiCall({ ...validatedFields.data });
    await createSession({ id: user.id, jwt });
  } catch (error: any) {
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

  redirect("/home");
}

export const loginApiCall = async (
  loginInput: LoginInput
): Promise<AuthResponse> => {
  const response = await baseApi.post("/auth/login", loginInput);
  return response.data;
};
