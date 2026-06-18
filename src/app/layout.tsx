import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parth Bhanushali | Portfolio",
  description: "Personal portfolio of Parth Bhanushali, a creative developer crafting premium web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
