import Header from "@/components/header-auth";
import { Zen_Maru_Gothic } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Stars from "@/components/Stars";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Guia Quântico",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const Zen = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={Zen.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-6 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <Header />
                </div>
              </nav>
              <div className="flex flex-col gap-20 max-w-full p-5">
                <Stars />
                {children}
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
