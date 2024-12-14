import { Container } from "@/components/layouts/Container";
import ChatbotClient from "./ui/Client";

export default async function ChatbotHome() {
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

        <ChatbotClient />
      </div>
    </Container>
  );
}
