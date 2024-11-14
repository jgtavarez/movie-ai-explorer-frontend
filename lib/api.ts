import { verifySession } from "./auth";

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
    },
  };

  return fetch(input, authInit);
}
