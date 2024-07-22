import type { Metadata } from "next";
import "./globals.css";


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
      <body >{children}</body>
    </html>
  );
}
