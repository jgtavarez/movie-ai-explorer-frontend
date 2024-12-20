"use client";
import { ProfileIcon, SparkleIcon } from "@/components/icon";
import Markdown from "react-markdown";

export interface Message {
  text: string;
  isUser: boolean;
}

interface Props {
  message: Message;
}

export const Message = ({ message }: Props) => {
  return (
    <div
      className={`flex gap-3 my-4 text-gray-600 text-sm flex-1 ${
        message.isUser ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
        <div className="rounded-full bg-gray-100 border p-1">
          {message.isUser ? (
            <ProfileIcon variant="secondary" />
          ) : (
            <SparkleIcon />
          )}
        </div>
      </span>
      <div className={`leading-relaxed ${message.isUser ? "text-right" : "text-left"}`}>
        <span className={"block font-bold title-theme"}>
          {message.isUser ? "You" : "AI"}
        </span>
        <span className="description-theme">
          <Markdown>{message.text}</Markdown>
        </span>
      </div>
    </div>
  );
};
