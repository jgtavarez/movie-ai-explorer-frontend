import { ChatBotParams } from "@/interfaces/ai";
import { authFetch } from "@/lib/api";

export const chatBotApi = async (
  { prompt }: ChatBotParams,
  abortSignal: AbortSignal
) => {
  const params = new URLSearchParams({
    prompt,
  }).toString();

  const data = await authFetch(
    `${process.env.SERVER_URL}/ai/chatbot?${params}`,
    {
      method: "POST",
      body: JSON.stringify({ prompt }),
      signal: abortSignal,
    }
  );
  console.log(data);
  return data;
};

// Generator function to return streams chunks

