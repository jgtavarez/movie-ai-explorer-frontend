import { redirect } from "next/navigation";
import { Header } from "../../components/Header";
import { verifySession } from "../../lib/auth";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await verifySession();

  if (!session?.id) {
    redirect("/auth/login");
  }

  return (
    <main className="m-0 p-0 h-screen flex flex-col">
      <Header />
      {children}
    </main>
  );
}
