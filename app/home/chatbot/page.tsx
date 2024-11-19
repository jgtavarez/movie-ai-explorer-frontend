import { verifySession } from "../../../lib/auth";
import ChatbotClient from "./ui/Client";

export default async function ChatbotHome() {
  const session = await verifySession();

  return <ChatbotClient url={`${process.env.SERVER_URL}`} jwt={session?.jwt || ""} />;
}
