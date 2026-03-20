import type { Metadata } from "next";

const siteName = "Nazia8Promo.kz";
const baseUrl = "https://nazia8promo.kz";
const defaultImage = `${baseUrl}/og-image.jpg`;

export const pageMetadata: Record<string, Metadata> = {
  home: {
    title: "Nazia8Promo.kz — академия продаж, внедрение и S:O:S CRM",
    description:
      "Премиальная система продаж для МОП, РОП и компаний: обучение продажам, корпоративное внедрение и связка с S:O:S CRM для Казахстана и СНГ.",
    alternates: {
      canonical: `${baseUrl}/`,
    },
    openGraph: {
      title: "Nazia8Promo.kz — академия продаж, внедрение и S:O:S CRM",
      description:
        "Обучение продажам, корпоративное внедрение и product-layer S:O:S CRM для Казахстана и СНГ.",
      url: `${baseUrl}/`,
      siteName,
      locale: "ru_RU",
      type: "website",
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: "Nazia8Promo.kz",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Nazia8Promo.kz — академия продаж, внедрение и S:O:S CRM",
      description:
        "Обучение продажам, корпоративное внедрение и product-layer S:O:S CRM.",
      images: [defaultImage],
    },
  },

  mop: {
    title: "Для МОП — Nazia8Promo.kz",
    description:
      "Обучение для МОП: работа с лидом, WhatsApp-переписка, ownership, следующий шаг и дисциплина воронки.",
    alternates: {
      canonical: `${baseUrl}/mop`,
    },
    openGraph: {
      title: "Для МОП — Nazia8Promo.kz",
      description:
        "Программа для менеджеров, которые должны не просто переписываться с клиентом, а доводить лид до следующего шага.",
      url: `${baseUrl}/mop`,
      siteName,
      locale: "ru_RU",
      type: "website",
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: "Для МОП — Nazia8Promo.kz",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Для МОП — Nazia8Promo.kz",
      description:
        "Обучение для МОП: лид, ownership, следующий шаг и дисциплина продаж.",
      images: [defaultImage],
    },
  },

  rop: {
    title: "Для РОП — Nazia8Promo.kz",
    description:
      "Программа для РОП: ownership, контроль команды, разбор потерь, дисциплина воронки и управляемая система продаж.",
    alternates: {
      canonical: `${baseUrl}/rop`,
    },
    openGraph: {
      title: "Для РОП — Nazia8Promo.kz",
      description:
        "Управленческий слой для руководителей продаж: ownership, контроль, потери и рабочая воронка.",
      url: `${baseUrl}/rop`,
      siteName,
      locale: "ru_RU",
      type: "website",
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: "Для РОП — Nazia8Promo.kz",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Для РОП — Nazia8Promo.kz",
      description:
        "Программа для руководителей продаж: ownership, контроль и управляемая воронка.",
      images: [defaultImage],
    },
  },

  companies: {
    title: "Для компаний — Nazia8Promo.kz",
    description:
      "Корпоративное внедрение системы продаж: роли, процесс, дисциплина команды и закрепление в рабочей среде.",
    alternates: {
      canonical: `${baseUrl}/companies`,
    },
    openGraph: {
      title: "Для компаний — Nazia8Promo.kz",
      description:
        "Корпоративное обучение и внедрение системы продаж для компаний Казахстана и СНГ.",
      url: `${baseUrl}/companies`,
      siteName,
      locale: "ru_RU",
      type: "website",
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: "Для компаний — Nazia8Promo.kz",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Для компаний — Nazia8Promo.kz",
      description:
        "Корпоративное внедрение системы продаж для компаний.",
      images: [defaultImage],
    },
  },

  crm: {
    title: "S:O:S CRM — WhatsApp-first CRM для продаж",
    description:
      "S:O:S CRM: WhatsApp-first CRM, Kanban, ownership, role-based workflow, practical analytics и AI-assisted layer.",
    alternates: {
      canonical: `${baseUrl}/crm`,
    },
    openGraph: {
      title: "S:O:S CRM — WhatsApp-first CRM для продаж",
      description:
        "Kanban, ownership, role-based workflow, practical analytics и AI-assisted layer для команд продаж.",
      url: `${baseUrl}/crm`,
      siteName,
      locale: "ru_RU",
      type: "website",
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: "S:O:S CRM",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "S:O:S CRM — WhatsApp-first CRM для продаж",
      description:
        "WhatsApp-first CRM, Kanban, ownership, practical analytics и AI-assisted layer.",
      images: [defaultImage],
    },
  },

  contact: {
    title: "Контакты — Nazia8Promo.kz",
    description:
      "Свяжитесь с Nazia8Promo.kz: стратегический звонок, WhatsApp-заявка или запрос демо S:O:S CRM.",
    alternates: {
      canonical: `${baseUrl}/contact`,
    },
    openGraph: {
      title: "Контакты — Nazia8Promo.kz",
      description:
        "Стратегический звонок, WhatsApp-заявка или запрос демо S:O:S CRM.",
      url: `${baseUrl}/contact`,
      siteName,
      locale: "ru_RU",
      type: "website",
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: "Контакты — Nazia8Promo.kz",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Контакты — Nazia8Promo.kz",
      description:
        "Выберите правильный следующий шаг внутри экосистемы Nazia8Promo.",
      images: [defaultImage],
    },
  },
};
