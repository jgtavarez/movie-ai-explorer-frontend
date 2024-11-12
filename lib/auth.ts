import "server-only";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { cache } from "react";
import { AuthResponse } from "@/interfaces/auth";

const encodedKey = new TextEncoder().encode(process.env.AUTH_SECRET);

type CookiesPayload = Pick<AuthResponse, "jwt">;

export async function encrypt(payload: CookiesPayload, expires: Date) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expires)
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Session not valid: ", error);
  }
}

export async function createSession(payload: CookiesPayload) {
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24h
  const session = await encrypt({ ...payload }, expires);

  (await cookies()).set("session", session, {
    httpOnly: true,
    secure: true,
    expires,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession() {
  (await cookies()).delete("session");
}

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.jwt) {
    return { jwt: null };
  }

  return { jwt: session.jwt };
});
