import type { Metadata } from "next";
import { Bebas_Neue, Inter, Noto_Sans_Devanagari, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import SideNav from "@/components/SideNav";
import "./globals.css";

const bebasNeue = Bebas_Neue({ 
  weight: "400", 
  subsets: ["latin"], 
  variable: "--font-hero" 
});

const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800"], 
  variable: "--font-body" 
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-jakarta',
});

const notoSansDevanagari = Noto_Sans_Devanagari({ 
  subsets: ["devanagari"], 
  weight: ["700"], 
  variable: "--font-hindi" 
});

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"], 
  style: ["italic"], 
  weight: ["400"],
  variable: "--font-serif" 
});

export const metadata: Metadata = {
  title: "Parth Bhanushali - Portfolio",
  description: "Portfolio of Parth Bhanushali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable} ${plusJakarta.variable} ${notoSansDevanagari.variable} ${playfairDisplay.variable}`}>
      <head>
        <link
          rel="preload"
          href="/parth-hero.jpg"
          as="image"
          type="image/jpeg"
        />
      </head>
      <body>
        <SideNav />
        {children}
      </body>
    </html>
  );
}
