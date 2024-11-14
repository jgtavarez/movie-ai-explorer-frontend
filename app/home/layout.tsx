import { Header } from "@/components/Header";
import { verifySession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await verifySession();

  if (!session?.jwt) {
    redirect("/auth/login");
  }

  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
