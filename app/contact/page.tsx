import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/site/metadata";
import { contactPage } from "@/content/site/contact";
import { SectionTitle } from "@/components/site/SectionTitle";

export const metadata: Metadata = pageMetadata.contact;

export default function ContactPage() {
  return (
    <div className="page-wrap pb-16 md:pb-20">
      <section className="container-premium pt-8 pb-8 lg:pt-10">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF4FF] px-4 py-2 text-sm font-medium text-[#1D4ED8] ring-1 ring-[#1D4ED8]/18">
              Контакты
            </div>

            <h1 className="editorial-title page-display max-w-4xl">
              {contactPage.hero.title}
            </h1>

            <p className="editorial-subtitle body-large max-w-3xl">
              {contactPage.hero.text}
            </p>
          </div>

          <div className="premium-panel relative p-6">
            <div className="text-xs uppercase tracking-[0.30em] text-[#7B8393]">
              Контактная информация
            </div>
            <div className="mt-4 h-px w-16 bg-[#D4A373]" />

            <div className="mt-5 space-y-3 text-sm leading-7 text-[#334155]">
              <div>
                <strong>WhatsApp:</strong>{" "}
                <a
                  href="https://wa.me/77478089359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1D4ED8] hover:underline"
                >
                  +7 747 808 9359
                </a>
              </div>

              <div>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@nazia8promo.kz"
                  className="text-[#1D4ED8] hover:underline"
                >
                  info@nazia8promo.kz
                </a>
              </div>

              <div>
                <strong>Адрес:</strong> г. Астана, пр. Туран 59/2, офис 269
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-premium">
          <SectionTitle
            eyebrow="Сценарии входа"
            title="Три понятных способа связаться"
            text="Выберите удобный формат: быстрый WhatsApp, email или запрос демо системы."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <div className="premium-panel p-6">
              <div className="inline-flex rounded-2xl bg-[#EEF4FF] px-3 py-2 text-xs uppercase tracking-[0.28em] text-[#1D4ED8] ring-1 ring-[#1D4ED8]/18">
                WhatsApp
              </div>
              <div className="mt-6 h-px w-14 bg-[#D4A373]" />
              <h3 className="mt-6 card-display font-semibold text-[#0B132B]">
                Быстрый диалог
              </h3>
              <p className="mt-4 body-regular text-[#5B6475]">
                Напишите сразу в WhatsApp и обсудите CRM, AI и внедрение.
              </p>
              <div className="mt-8">
                <a
                  href="https://wa.me/77478089359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-premium-dark"
                >
                  Написать в WhatsApp
                </a>
              </div>
            </div>

            <div className="premium-panel p-6">
              <div className="inline-flex rounded-2xl bg-[#F6EBDD] px-3 py-2 text-xs uppercase tracking-[0.28em] text-[#9A6A33] ring-1 ring-[#D4A373]/28">
                Email
              </div>
              <div className="mt-6 h-px w-14 bg-[#D4A373]" />
              <h3 className="mt-6 card-display font-semibold text-[#0B132B]">
                Коммерческий запрос
              </h3>
              <p className="mt-4 body-regular text-[#5B6475]">
                Напишите на email для документов, реквизитов и детального обсуждения.
              </p>
              <div className="mt-8">
                <a
                  href="mailto:info@nazia8promo.kz"
                  className="button-premium-gold"
                >
                  Написать на email
                </a>
              </div>
            </div>

            <div className="premium-panel p-6">
              <div className="inline-flex rounded-2xl bg-[#EEF4FF] px-3 py-2 text-xs uppercase tracking-[0.28em] text-[#1D4ED8] ring-1 ring-[#1D4ED8]/18">
                Демо
              </div>
              <div className="mt-6 h-px w-14 bg-[#D4A373]" />
              <h3 className="mt-6 card-display font-semibold text-[#0B132B]">
                Демо S:O:S CRM
              </h3>
              <p className="mt-4 body-regular text-[#5B6475]">
                Покажем систему, Kanban, чаты и рабочую логику вживую.
              </p>
              <div className="mt-8">
                <Link href="/crm" className="button-premium-blue">
                  Посмотреть CRM
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-premium">
          <div className="premium-panel p-6 lg:p-8">
            <SectionTitle
              eyebrow="Реквизиты"
              title="Реквизиты для договора и оплаты"
              text="Актуальная информация для юридических и коммерческих вопросов."
            />

            <div className="mt-8 grid gap-3 text-sm leading-7 text-[#334155] md:grid-cols-2">
              <div><strong>Наименование:</strong> ИП «NAZIA8PROMO»</div>
              <div><strong>БИН (ИИН):</strong> 870623402288</div>
              <div><strong>Банк:</strong> АО «Kaspi Bank»</div>
              <div><strong>КБе:</strong> 19</div>
              <div><strong>БИК:</strong> CASPKZKA</div>
              <div className="break-all"><strong>Номер счета:</strong> KZ93722S000007306827</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}