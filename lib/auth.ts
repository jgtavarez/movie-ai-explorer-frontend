import "server-only";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { cache } from "react";
import { AuthResponse } from "../interfaces/auth";

const encodedKey = new TextEncoder().encode(process.env.AUTH_SECRET);

type CookiesPayload = {
  id: AuthResponse["user"]["id"];
  jwt: AuthResponse["jwt"];
};

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
    return payload as { id: string; jwt: string };
  } catch (error) {
    console.log("Session not valid: ", error);
  }
}

export async function createSession(payload: CookiesPayload) {
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24h
  const session = await encrypt({ ...payload }, expires);

  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    expires,
    sameSite: "lax",
    path: "/",
  });
}

export function deleteSession() {
  cookies().delete("session");
}

export const verifySession = cache(async () => {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.id) {
    return { id: null, jwt: null };
  }

  return { id: session.id, jwt: session.jwt };
});

export const getCacheKey = async (key: string) => {
  const session = await verifySession();

  return `${key}:${session?.id}`;
};
