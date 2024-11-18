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
    <main
      style={{
        margin: 0,
        padding: 0,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      {children}
    </main>
  );
}
