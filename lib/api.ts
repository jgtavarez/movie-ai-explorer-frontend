import { verifySession } from "./auth";

export interface Options {
  skip: boolean;
}

export const InitOptions: Options = {
  skip: false,
};

export interface DataError {
  message: string[] | string;
  error: string;
  statusCode: number;
}

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

export async function handleFetchError(resp: Response) {
  const errorData = await resp.json();

  const customError = new Error("Something went wrong") as Error & {
    response?: { data?: unknown };
  };

  customError.response = { data: errorData };

  throw customError;
}
