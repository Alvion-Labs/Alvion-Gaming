import type { Metadata } from "next";
import localFont from "next/font/local";
import { SITE_CONFIG } from "@/data/site";
import "./globals.css";

const geist = localFont({
  src: "./fonts/DejaVuSans.ttf",
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: "Alvion Gaming | Esports Organization",
  description: SITE_CONFIG.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alvion Gaming | Esports Organization",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alvion Gaming | Esports Organization",
    description: SITE_CONFIG.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full bg-black text-white antialiased">{children}</body>
    </html>
  );
}
