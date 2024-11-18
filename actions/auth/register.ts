"use server";
import { redirect } from "next/navigation";
import { z } from "zod";
import { AuthResponse, RegisterInput } from "../../interfaces/auth";
import { baseApi, DataError } from "../../lib/axios";
import { createSession } from "../../lib/auth";

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

export const registerApiCall = async (
  registerInput: RegisterInput
): Promise<AuthResponse> => {
  const response = await baseApi.post("/auth/register", registerInput);
  return response.data;
};

export async function registerAction(
  prevState: string | undefined,
  formData: FormData
): Promise<any> {
  const parsedCredentials = REGISTER_SCHEMA.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!parsedCredentials.success) {
    return {
      errors: parsedCredentials.error.flatten().fieldErrors,
    };
  }

  try {
    const { jwt, user } = await registerApiCall({
      ...parsedCredentials.data,
    });
    await createSession({ id: user.id, jwt });
    redirect("/home/profile/categories");
  } catch (error: any) {
    if (error?.message === "NEXT_REDIRECT") {
      throw error;
    }

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
