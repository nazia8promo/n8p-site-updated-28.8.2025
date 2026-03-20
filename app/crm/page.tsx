import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/site/metadata";
import { crmPage } from "@/content/site/crm";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CrmProofRail } from "@/components/site/CrmProofRail";

export const metadata: Metadata = pageMetadata.crm;

export default function CrmPage() {
  return (
    <div className="page-wrap pb-24">
      <section className="container-premium pt-6 pb-7 lg:pt-8">
        <div className="premium-band premium-dark p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A373]/14 px-4 py-2 text-sm text-[#D4A373] ring-1 ring-[#D4A373]/20">
                CRM layer inside S:O:S Sales
              </div>

              <h1 className="mt-5 max-w-3xl page-display text-white">
                {crmPage.hero.title}
              </h1>

              <p className="mt-6 max-w-3xl body-large text-[#CBD5E1]">
                {crmPage.hero.text}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="button-premium-gold">
                  Запросить demo
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
                "S:O:S Sales = Sales Operating System",
                "S:O:S CRM = WhatsApp-first CRM layer",
                "Kanban и ownership как рабочая логика команды",
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

      <div className="container-premium -mt-2 pb-3 lg:pb-5">
        <CrmProofRail />
      </div>

      <section className="section-space">
        <div className="container-premium">
          <SectionTitle
            eyebrow={crmPage.features.eyebrow}
            title="Ключевые блоки продукта"
            text="S:O:S CRM — прикладной CRM-слой внутри S:O:S Sales: чисто, понятно и без перегруженного списка модулей."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {crmPage.features.items.map((item, index) => (
              <div key={item.title} className="premium-panel p-6">
                <div
                  className={`inline-flex rounded-2xl px-3 py-2 text-[11px] uppercase tracking-[0.28em] ring-1 ${
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
                <h3 className="mt-5 card-display font-semibold text-[#0B132B]">
                  {item.title}
                </h3>
                <p className="mt-4 body-regular text-[#5B6475]">
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
            title="S:O:S CRM не пытается быть перегруженным всем для всех — он выигрывает в ясности и прикладной логике продаж."
            text="Это CRM layer внутри S:O:S Sales: не шуметь функциями, а показать, почему продукт легче понять, показать и внедрить в рабочий процесс команды."
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
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
                title: "Связан с S:O:S Sales",
                text: "Обучение, внедрение и CRM собраны в одну operating-логику.",
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
                <div className="text-[11px] uppercase tracking-[0.30em] text-[#7B8393]">
                  {item.title}
                </div>
                <div className="mt-4 h-px w-12 bg-[#D4A373]" />
                <p className="mt-4 body-regular text-[#334155]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-premium">
          <div className="premium-panel p-6 lg:p-8">
            <SectionTitle
              eyebrow="Связка с Nazia8Promo"
              title="S:O:S CRM — CRM layer внутри S:O:S Sales, а S:O:S Sales — operating layer внутри экосистемы Nazia8Promo."
              text="Nazia8Promo обучает и внедряет. S:O:S Sales закрепляет систему продаж в рабочей среде. S:O:S CRM — продуктовый CRM-слой внутри этой логики."
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
