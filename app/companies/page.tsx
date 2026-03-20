import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site/metadata";

export const metadata: Metadata = pageMetadata.companies;

import Link from "next/link";
import { companiesPage } from "@/content/site/companies";
import { SectionTitle } from "@/components/site/SectionTitle";

export default function CompaniesPage() {
  return (
    <div className="page-wrap pb-24">
      <section className="container-premium pt-14 pb-16 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F6EBDD] px-4 py-2 text-sm font-medium text-[#9A6A33] ring-1 ring-[#D4A373]/28">
              Корпоративный формат
            </div>

            <h1 className="editorial-title hero-display max-w-5xl">
              {companiesPage.hero.title}
            </h1>

            <p className="editorial-subtitle body-large max-w-3xl">
              {companiesPage.hero.text}
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.2rem] bg-gradient-to-br from-[#D4A373]/14 via-[#1D4ED8]/10 to-transparent blur-2xl" />
            <div className="premium-panel relative p-6">
              <div className="text-xs uppercase tracking-[0.30em] text-[#7B8393]">
                B2B framing
              </div>
              <div className="mt-4 h-px w-16 bg-[#D4A373]" />
              <p className="mt-5 text-base leading-8 text-[#334155]">
                Это не “обучение для сотрудников на один день”. Это
                сборка управляемой системы продаж: роли, процесс,
                дисциплина, внедрение и рабочая среда команды.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#F8FAFC]">
        <div className="container-premium">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <SectionTitle
              eyebrow={companiesPage.benefits.eyebrow}
              title={companiesPage.benefits.title}
              text="Для бизнеса это не про отдельный тренинг. Это про то, как собрать ясную систему: кто за что отвечает, как движется лид, где виден контроль и как закрепляется дисциплина."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {companiesPage.benefits.items.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.8rem] px-5 py-5 ring-1 shadow-sm ${
                    index % 2 === 0
                      ? "bg-white ring-[#0B132B]/8"
                      : "bg-[#F6EBDD] ring-[#D4A373]/28"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#9A6A33]" />
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
            eyebrow="Формат работы"
            title="От диагностики до закрепления в команде."
            text="Корпоративная программа должна выглядеть не как тренинг на день, а как маршрут внедрения управляемой системы продаж."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Диагностика",
                text: "Разбор текущей логики продаж, ролей и узких мест команды.",
              },
              {
                title: "Обучение по ролям",
                text: "Отдельная работа с собственником, РОП и МОП внутри общей системы.",
              },
              {
                title: "Закрепление",
                text: "Внедрение процесса и перенос методики в ежедневную практику команды.",
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

      <section className="section-space premium-dark">
        <div className="container-premium">
          <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
            <SectionTitle
              eyebrow="B2B-вход"
              title="Если компании нужен не курс, а реально внедрённая система продаж — это уже разговор про роли, процесс и product layer."
              text="Так корпоративная страница связывается с S:O:S CRM естественно: сначала собираем управляемую модель, затем переносим её в рабочую среду без лишней перегрузки."
              light
            />

            <div className="grid gap-4">
              {[
                "Роли и ответственность внутри команды",
                "Видимость по процессу и точкам контроля",
                "Рабочая дисциплина, а не разовые усилия",
                "Закрепление в CRM, когда процесс уже собран",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.8rem] px-5 py-5 text-base leading-8 ring-1 ${
                    index % 2 === 0
                      ? "bg-white/6 text-[#E2E8F0] ring-white/10"
                      : "bg-[#D4A373]/12 text-[#E2E8F0] ring-[#D4A373]/18"
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
              title="Обсудить корпоративное внедрение"
              text="Если вы хотите не точечное обучение, а реально собранную систему продаж для компании — начнём с диагностики и архитектуры ролей."
            />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="button-premium-dark">
                Назначить стратегический звонок
              </Link>
              <Link href="/crm" className="button-premium-gold">
                Открыть страницу CRM
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
