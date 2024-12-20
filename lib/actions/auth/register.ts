/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { AuthResponse, RegisterInput } from "@/interfaces/auth";
import { authFetch, DataError, handleFetchError } from "@/lib/api";
import { createSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { z } from "zod";

const REGISTER_SCHEMA = z
  .object({
    name: z.string().trim().min(1, { message: "Required" }),
    email: z.string().email({ message: "Invalid email" }).trim(),
    password: z
      .string()
      .min(8, { message: "Minimum 8 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter" })
      .regex(/[0-9]/, { message: "Contain at least one number" })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character",
      })
      .trim(),
    confirmPassword: z.string().trim(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

export async function register(state: any, formData: FormData): Promise<any> {
  // Validate form fields
  const validatedFields = REGISTER_SCHEMA.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Create user session
  try {
    const { jwt, user } = await registerApiCall({
      ...validatedFields.data,
    });
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

  redirect("/home/profile/categories");
}

export const registerApiCall = async (
  registerInput: RegisterInput
): Promise<AuthResponse> => {
  const data = await authFetch(`/auth/login`, {
      method: "POST",
      body: JSON.stringify({ ...registerInput }),
    }).then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
        return handleFetchError(resp);
      });
  
    return data;
};
