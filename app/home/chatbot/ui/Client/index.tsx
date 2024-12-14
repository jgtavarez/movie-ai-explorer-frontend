"use client";
import { useState } from "react";
import { Button, Input } from "@/components/ui";
import { Message } from "../Message";
import { chatBotApi } from "@/lib/actions/ai";

export default function ChatbotClient() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm your assistant for movies and TV series. Ask me about films, genres, directors, actors, or get personalized recommendations. Let’s dive into the world of entertainment!",
      isUser: false,
    },
  ]);

  const handlePost = async () => {
    const originalPrompt = prompt;
    setPrompt("");
    setIsLoading(true);
    setMessages((prev) => [...prev, { text: originalPrompt, isUser: true }]);

    const stream = chatBotApi({ prompt: originalPrompt });

    setMessages((messages) => [
      ...messages,
      { text: "Loading...", isUser: false },
    ]);

    for await (const text of stream) {
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].text = text;
        return newMessages;
      });
    }

    setIsLoading(false);
  };

  return (
    <>
      {/* Render Messages */}
      <div
        className="pr-4 h-[500px]"
        style={{
          minWidth: "100%",
          maxHeight: "500px",
          overflowY: "auto",
        }}
      >
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center pt-0">
        <div className="flex items-center justify-center w-full space-x-2">
          <Input
            disabled={isLoading}
            autoComplete="false"
            type="text"
            placeholder="Type your message"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            maxLength={400}
          />
          <Button
            text="Send"
            disabled={isLoading || !prompt}
            onClick={handlePost}
            style={{
              maxWidth: "6rem",
            }}
          />
        </div>
      </div>
    </>
  );
}
