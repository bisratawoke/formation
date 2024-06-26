import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";
import TopNav from "@/components/TopNav";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <TopNav />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
