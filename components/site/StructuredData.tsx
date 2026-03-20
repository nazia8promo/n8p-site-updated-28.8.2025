export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://nazia8promo.kz/#organization",
        name: "Nazia8Promo.kz",
        url: "https://nazia8promo.kz",
        logo: "https://nazia8promo.kz/icon.svg",
        description:
          "Академия продаж, корпоративное внедрение и связка с S:O:S CRM для Казахстана и СНГ.",
      },
      {
        "@type": "WebSite",
        "@id": "https://nazia8promo.kz/#website",
        url: "https://nazia8promo.kz",
        name: "Nazia8Promo.kz",
        inLanguage: "ru-KZ",
        publisher: {
          "@id": "https://nazia8promo.kz/#organization",
        },
      },
      {
        "@type": "Service",
        "@id": "https://nazia8promo.kz/#service",
        name: "Sales Academy and Implementation",
        serviceType: [
          "Sales training",
          "Sales process implementation",
          "CRM-enabled sales workflow",
        ],
        provider: {
          "@id": "https://nazia8promo.kz/#organization",
        },
        areaServed: ["Kazakhstan", "CIS"],
        audience: {
          "@type": "Audience",
          audienceType: ["Sales managers", "Heads of sales", "Companies"],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
