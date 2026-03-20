import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StructuredData } from "@/components/site/StructuredData";
import { MobileStickyCTA } from "@/components/site/MobileStickyCTA";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nazia8promo.kz"),
  applicationName: "Nazia8Promo.kz",
  title: {
    default: "Nazia8Promo.kz",
    template: "%s | Nazia8Promo.kz",
  },
  description:
    "Академия продаж, корпоративное внедрение и S:O:S Sales для Казахстана и СНГ.",
  keywords: [
    "CRM",
    "продажи",
    "обучение продажам",
    "РОП",
    "МОП",
    "WhatsApp CRM",
    "Kanban CRM",
    "S:O:S Sales",
    "S:O:S CRM",
    "Казахстан",
  ],
  alternates: {
    canonical: "https://nazia8promo.kz",
  },
  manifest: "/manifest.webmanifest",
  category: "business",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://nazia8promo.kz",
    siteName: "Nazia8Promo.kz",
    title: "Nazia8Promo.kz",
    description:
      "Академия продаж, корпоративное внедрение и S:O:S Sales для Казахстана и СНГ.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazia8Promo.kz",
    description:
      "Академия продаж, корпоративное внедрение и S:O:S Sales для Казахстана и СНГ.",
  },
};

export const viewport: Viewport = {
  themeColor: "#081733",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${manrope.variable} premium-shell min-h-screen bg-[#F5F0E8] text-[#111827]`}
      >
        <StructuredData />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
