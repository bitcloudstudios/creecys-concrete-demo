import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Creecy's Concrete | Concrete & Flatwork Contractor in New Orleans, LA",
  description:
    "Established in 1978 by Kevin Creecy. Residential and commercial driveways, sidewalks, patios, slabs, and concrete finishing in New Orleans, Louisiana. Call (504) 884-6857 for a free estimate.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#1C1917] selection:bg-[#B45309]/15 selection:text-[#1C1917]">
        {children}
      </body>
    </html>
  );
}
