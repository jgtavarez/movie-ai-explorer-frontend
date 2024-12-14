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

  const baseRequest: RequestInit = {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  // Set baseURL
  const baseURL =
    typeof input === "string" ? `${process.env.SERVER_URL}${input}` : input;

  return fetch(baseURL, baseRequest);
}
