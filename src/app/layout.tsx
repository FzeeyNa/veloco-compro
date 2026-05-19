import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veloco. — Crafting Digital Impact",
  description:
    "Veloco adalah IT Solutions startup yang berfokus pada digital transformation. Web Development, Mobile App, UI/UX Design, dan IT Consulting.",
  keywords: [
    "Veloco",
    "IT Solutions",
    "Digital Transformation",
    "Web Development",
    "Mobile App",
    "UI/UX Design",
  ],
  openGraph: {
    title: "Veloco. — Crafting Digital Impact",
    description:
      "IT Solutions startup untuk digital transformation bisnis Anda.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${dmSerif.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
