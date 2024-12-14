"use client"; // -> next cannot handle streams in server actions natively
import { ChatBotParams } from "@/interfaces/ai";

export const chatBotApi = async function* ({ prompt }: ChatBotParams) {
  try {
    const data = await fetch("/api/ai/chatbot", {
      method: "POST",
      body: JSON.stringify({ prompt }),
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
    console.error(error);
    return null;
  }
};
