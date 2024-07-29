import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Menus/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "AY Associates",
  description: "A Real Estate Company!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen grow flex-col items-center justify-between self-stretch font-primary">
          <Navbar />
          <main className="item-center flex grow justify-start self-stretch">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
