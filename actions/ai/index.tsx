"use server";
import { ChatBotParams } from "../../interfaces/ai";
import { authFetch } from "../../lib/api";

export const chatBotApi = async ({ prompt }: ChatBotParams) => {
  const params = new URLSearchParams({
    prompt,
  }).toString();

  const data = await authFetch(
    `${process.env.SERVER_URL}/ai/chatbot?${params}`,
    {
      method: "POST",
      body: JSON.stringify({ prompt }),
    }
  ).then((res) => res.json());

  return data;
};
