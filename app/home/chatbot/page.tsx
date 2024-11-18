"use client";
import { useState } from "react";
import { Message } from "./ui/Message";
import { chatBotApi } from "../../../actions/ai";
import { Container } from "../../../components/layouts/Container";
import { Button, Input } from "../../../components/ui";

export default function ChatbotHome() {
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

    const { content } = await chatBotApi({ prompt: originalPrompt });
    setIsLoading(false);

    setMessages((messages) => [...messages, { text: content, isUser: false }]);
  };

  return (
    <Container>
      <div
        className="w-full rounded-lg border border-[#e5e7eb] p-6 dark:bg-gray-900"
        style={{
          boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
        }}
      >
        {/* Header */}
        <div className="flex flex-col space-y-1.5 pb-6">
          <h2 className="font-semibold text-lg tracking-tight title-theme">
            Chatbot
          </h2>
          <p className="text-sm text-[#6b7280] leading-3 description-theme">
            Powered by AI
          </p>
        </div>

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
          {isLoading ? (
            <Message message={{ text: "Loading...", isUser: false }} />
          ) : null}
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
      </div>
    </Container>
  );
}
