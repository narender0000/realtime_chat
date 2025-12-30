import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/providers";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: ">private_chat",
  description:
    "A full-stack real-time chat application enabling users to create temporary chat rooms and exchange messages instantly using event-driven communication and Redis-backed storage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable}  antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
