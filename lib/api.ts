import { verifySession } from "./auth";

export interface Options {
  skip: boolean;
}

export const InitOptions: Options = {
  skip: false,
};

export async function authFetch(
  input: RequestInfo,
  init?: RequestInit
): Promise<Response> {
  const token = (await verifySession()).jwt;

  const authInit: RequestInit = {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  return fetch(input, authInit);
}
