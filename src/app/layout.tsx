import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";
import TopNav from "@/components/TopNav";
import { ThemeProvider, createTheme } from "@mui/material";
import { theme } from "@/components/Theme";

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
          <ThemeProvider theme={theme}>
            <TopNav />
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
