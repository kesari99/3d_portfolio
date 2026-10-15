import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Menu } from "@/components/menu";
import { site } from "@/content/site";
import "./globals.css";

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: "/", types: { "application/rss+xml": "/rss.xml" } },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: site.title,
    description: site.tagline,
    images: [site.ogImage],
  },
  twitter: { card: "summary" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Menu />
        <Analytics />
      </body>
    </html>
  );
}
