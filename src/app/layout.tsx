import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taman Suri — Landscaping & Premium Houseplants",
  description:
    "Professional landscaping design & build services, paired with a curated collection of premium houseplants for homes and commercial spaces.",
  keywords: [
    "landscaping",
    "houseplants",
    "garden design",
    "taman",
    "tanaman hias",
    "vertical garden",
    "premium plants",
  ],
  openGraph: {
    title: "Taman Suri — Landscaping & Premium Houseplants",
    description:
      "Bringing the Beauty of Nature into Your Living Spaces.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-charcoal bg-cream-50">
        {children}
      </body>
    </html>
  );
}
