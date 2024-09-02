import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header/Header";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { Providers } from "@/store/Provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Login com Totp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "h-screen bg-slate-100 font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <ProtectedRoute>
            <Header />
            {children}
          </ProtectedRoute>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
