"use client"; // -> next cannot handle streams in server actions natively
import { ChatBotParams } from "../../interfaces/ai";

export const chatBotApi = async function* (
  { prompt }: ChatBotParams,
  { url, jwt }: { url: string; jwt: string }
) {
  try {
    const data = await fetch(`${url}/ai/chatbot`, {
      method: "POST",
      body: JSON.stringify({ prompt }),
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    });

    if (!data.ok) {
      throw new Error();
    }
    const reader = data.body?.getReader();
    if (!reader) {
      throw new Error();
    }

    const decoder = new TextDecoder();
    let text = "";
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        break;
      }

      const decodedChunk = decoder.decode(value, { stream: true });
      text += decodedChunk;
      yield text;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
