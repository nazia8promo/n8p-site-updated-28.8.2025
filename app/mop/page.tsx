import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site/metadata";

export const metadata: Metadata = pageMetadata.mop;

import Link from "next/link";
import { mopPage } from "@/content/site/mop";
import { SectionTitle } from "@/components/site/SectionTitle";

export default function MopPage() {
  return (
    <div className="page-wrap pb-24">
      <section className="container-premium pt-14 pb-16 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF4FF] px-4 py-2 text-sm font-medium text-[#1D4ED8] ring-1 ring-[#1D4ED8]/18">
              Программа для МОП
            </div>

            <h1 className="editorial-title hero-display max-w-5xl">
              {mopPage.hero.title}
            </h1>

            <p className="editorial-subtitle body-large max-w-3xl">
              {mopPage.hero.text}
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.2rem] bg-gradient-to-br from-[#1D4ED8]/12 via-[#D4A373]/10 to-transparent blur-2xl" />
            <div className="premium-panel relative p-6">
              <div className="text-xs uppercase tracking-[0.30em] text-[#7B8393]">
                Editorial framing
              </div>
              <div className="mt-4 h-px w-16 bg-[#D4A373]" />
              <p className="mt-5 text-base leading-8 text-[#334155]">
                Эта страница должна продавать не “курс по общению”, а
                уверенную рабочую логику: входящий лид, ownership,
                следующий шаг, дисциплина этапов и прозрачность для РОП.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#F8FAFC]">
        <div className="container-premium">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <SectionTitle
              eyebrow={mopPage.benefits.eyebrow}
              title={mopPage.benefits.title}
              text="После обучения менеджер лучше понимает, как брать лид в работу, как не расплываться в переписке и как двигать клиента по воронке без потери темпа."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {mopPage.benefits.items.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.8rem] px-5 py-5 ring-1 shadow-sm ${
                    index % 2 === 0
                      ? "bg-white ring-[#0B132B]/8"
                      : "bg-[#EEF4FF] ring-[#1D4ED8]/18"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#1D4ED8]" />
                    <div className="text-base leading-8 text-[#334155]">
                      {item}
                    </div>
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
            eyebrow={mopPage.results.eyebrow}
            title={mopPage.results.title}
            text="Эта секция показывает, что программа влияет не только на поведение менеджера, но и на общую управляемость отдела продаж."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {mopPage.results.items.map((item, index) => (
              <div key={item.title} className="premium-panel p-8">
                <div
                  className={`inline-flex rounded-2xl px-3 py-2 text-xs uppercase tracking-[0.28em] ring-1 ${
                    index === 0
                      ? "bg-[#EEF4FF] text-[#1D4ED8] ring-[#1D4ED8]/18"
                      : index === 1
                      ? "bg-[#EAF6F4] text-[#0F766E] ring-[#0F766E]/16"
                      : "bg-[#F6EBDD] text-[#9A6A33] ring-[#D4A373]/28"
                  }`}
                >
                  Result
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

      <section className="section-space premium-dark">
        <div className="container-premium">
          <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
            <SectionTitle
              eyebrow="Связка с CRM"
              title="Когда навык уже собран, его можно закрепить в рабочей среде — без перегрузки и без потери простоты."
              text="Для МОП CRM должна выглядеть не как наказание, а как удобное продолжение дисциплины: Kanban, ownership, рабочий контекст и прозрачность следующего шага."
              light
            />

            <div className="grid gap-4">
              {[
                "Kanban как понятный рабочий слой по лидам",
                "Ownership по сделке и следующему шагу",
                "Контекст для руководителя без лишнего давления на МОП",
                "AI-assisted support как помощь, а не замена менеджера",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.8rem] px-5 py-5 text-base leading-8 ring-1 ${
                    index % 2 === 0
                      ? "bg-white/6 text-[#E2E8F0] ring-white/10"
                      : "bg-[#1D4ED8]/14 text-[#E2E8F0] ring-[#1D4ED8]/20"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-premium">
          <div className="premium-panel p-8 lg:p-10">
            <SectionTitle
              eyebrow="Следующий шаг"
              title="Подобрать обучение для ваших МОП"
              text="Если вам нужно усилить работу менеджеров в WhatsApp и сделать их действия понятнее для РОП — начнём с программы для МОП."
            />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="button-premium-dark">
                Оставить заявку
              </Link>
              <Link href="/crm" className="button-premium-blue">
                Перейти к S:O:S CRM
              </Link>
              <Link href="/rop" className="button-premium-gold">
                Открыть программу РОП
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
