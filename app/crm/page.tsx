import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site/metadata";

export const metadata: Metadata = pageMetadata.crm;

import Link from "next/link";
import { crmPage } from "@/content/site/crm";
import { SectionTitle } from "@/components/site/SectionTitle";

export default function CrmPage() {
  return (
    <div className="page-wrap pb-24">
      <section className="container-premium pt-14 pb-16 lg:pt-20">
        <div className="premium-band premium-dark p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A373]/14 px-4 py-2 text-sm text-[#D4A373] ring-1 ring-[#D4A373]/20">
                Product website direction
              </div>

              <h1 className="mt-5 max-w-5xl hero-display text-white">
                {crmPage.hero.title}
              </h1>

              <p className="mt-6 max-w-3xl body-large text-[#CBD5E1]">
                {crmPage.hero.text}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="button-premium-gold">
                  Запросить демо
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white transition hover:bg-white/10"
                >
                  Перейти к входу
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                "WhatsApp-first sales workflow",
                "Kanban и ownership как рабочая логика команды",
                "ROP/MOP role-based access and process",
                "AI-assisted support без unsafe обещаний",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.8rem] px-5 py-5 ring-1 ${
                    index % 2 === 0
                      ? "bg-white/6 ring-white/10"
                      : "bg-[#1D4ED8]/14 ring-[#1D4ED8]/20"
                  }`}
                >
                  <div className="text-base leading-8 text-[#E2E8F0]">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-premium">
          <SectionTitle
            eyebrow={crmPage.features.eyebrow}
            title="Ключевые блоки продукта"
            text="Продуктовый слой тоже должен выглядеть premium: чисто, понятно и без перегруженного списка модулей."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {crmPage.features.items.map((item, index) => (
              <div key={item.title} className="premium-panel p-8">
                <div
                  className={`inline-flex rounded-2xl px-3 py-2 text-xs uppercase tracking-[0.28em] ring-1 ${
                    index === 0
                      ? "bg-[#EEF4FF] text-[#1D4ED8] ring-[#1D4ED8]/18"
                      : index === 1
                      ? "bg-[#EAF6F4] text-[#0F766E] ring-[#0F766E]/16"
                      : index === 2
                      ? "bg-[#F6EBDD] text-[#9A6A33] ring-[#D4A373]/28"
                      : "bg-[#EEF4FF] text-[#1D4ED8] ring-[#1D4ED8]/18"
                  }`}
                >
                  Feature
                </div>

                <div className="mt-6 h-px w-14 bg-[#D4A373]" />
                <h3 className="mt-6 card-display font-semibold text-[#0B132B]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[#5B6475]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#F8FAFC]">
        <div className="container-premium">
          <SectionTitle
            eyebrow="Позиция продукта"
            title="CRM не пытается быть перегруженным всем для всех — она выигрывает в ясности и прикладной логике продаж."
            text="Это и есть сильная product-подача: не шуметь функциями, а показать, почему продукт легче понять, показать и внедрить в рабочий процесс команды."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Ближе к реальности",
                text: "Логика ближе к WhatsApp-продажам и ежедневной работе операторов.",
              },
              {
                title: "Легче внедрить",
                text: "Продукт легче усваивается командой, чем тяжёлые сложные системы.",
              },
              {
                title: "Связан с academy",
                text: "Обучение, внедрение и CRM собраны в одну экосистему.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`rounded-[1.9rem] px-6 py-6 ring-1 shadow-sm ${
                  index === 0
                    ? "bg-white ring-[#0B132B]/8"
                    : index === 1
                    ? "bg-[#EEF4FF] ring-[#1D4ED8]/18"
                    : "bg-[#F6EBDD] ring-[#D4A373]/28"
                }`}
              >
                <div className="text-xs uppercase tracking-[0.30em] text-[#7B8393]">
                  {item.title}
                </div>
                <div className="mt-4 h-px w-12 bg-[#D4A373]" />
                <p className="mt-4 text-base leading-8 text-[#334155]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-premium">
          <div className="premium-panel p-8 lg:p-10">
            <SectionTitle
              eyebrow="Связка с Nazia8Promo"
              title="S:O:S CRM — отдельный product brand внутри экосистемы Nazia8Promo."
              text="Продукт может расти как самостоятельный сайт и бренд, но внутри экосистемы он остаётся логичным продолжением academy и implementation-модели."
            />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/" className="button-premium-dark">
                Вернуться на главную
              </Link>
              <Link href="/contact" className="button-premium-gold">
                Открыть контакты
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
