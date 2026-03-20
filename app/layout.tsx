import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StructuredData } from "@/components/site/StructuredData";
import { MobileStickyCTA } from "@/components/site/MobileStickyCTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://nazia8promo.kz"),
  applicationName: "Nazia8Promo.kz",
  title: {
    default: "Nazia8Promo.kz",
    template: "%s | Nazia8Promo.kz",
  },
  description:
    "Академия продаж, корпоративное внедрение и S:O:S CRM для Казахстана и СНГ.",
  keywords: [
    "CRM",
    "продажи",
    "обучение продажам",
    "РОП",
    "МОП",
    "WhatsApp CRM",
    "Kanban CRM",
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
      "Академия продаж, корпоративное внедрение и S:O:S CRM для Казахстана и СНГ.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazia8Promo.kz",
    description:
      "Академия продаж, корпоративное внедрение и S:O:S CRM для Казахстана и СНГ.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B132B",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="premium-shell min-h-screen bg-[#FAF7F2] text-[#1F2937]">
        <StructuredData />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
