import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site/metadata";

export const metadata: Metadata = pageMetadata.home;

import Link from "next/link";
import { homePage } from "@/content/site/home";
import { SectionTitle } from "@/components/site/SectionTitle";
import { HeroSystemCard } from "@/components/site/HeroSystemCard";

export default function HomePage() {
  return (
    <div className="page-wrap pb-24">
      <section className="container-premium pt-8 pb-12 lg:pt-14">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8 rounded-[2rem] bg-white/58 p-6 shadow-[0_10px_30px_rgba(8,23,51,0.04)] backdrop-blur-sm lg:p-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F6EBDD] px-4 py-2 text-sm font-medium text-[#9A6A33] ring-1 ring-[#D4A373]/40">
              {homePage.hero.badge}
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="gold-line" />
                <div className="text-xs font-semibold uppercase tracking-[0.34em] text-[#7B8393]">
                  Sales operating system
                </div>
              </div>

              <h1 className="editorial-title hero-display max-w-[42rem]">
                {homePage.hero.title}
              </h1>

              <p className="editorial-subtitle body-large max-w-[36rem]">
                {homePage.hero.text}
              </p>

              <div className="inline-flex rounded-full bg-[#EEF4FF] px-4 py-2 text-sm font-medium text-[#1D4ED8] ring-1 ring-[#1D4ED8]/18">
               Установка от 59 000 ₸ · до 5 менеджеров включено
             </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="button-premium-dark">
                Получить демо
              </Link>
              <Link href="/crm" className="button-premium-blue">
                Посмотреть CRM
              </Link>
            </div>
          </div>

          <HeroSystemCard />
        </div>
      </section>

      <section className="section-space bg-[#F8FAFC]">
        <div className="container-premium">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <SectionTitle
              eyebrow={homePage.problem.eyebrow}
              title={homePage.problem.title}
              text={homePage.problem.text}
            />

            <div className="grid gap-4 md:grid-cols-2">
              {homePage.problem.items.map((item, index) => (
                <div
                  key={item.title}
                  className={`rounded-[1.8rem] p-6 ring-1 shadow-sm ${
                    index === 0
                      ? "bg-white ring-[#0B132B]/8"
                      : index === 1
                      ? "bg-[#EEF4FF] ring-[#1D4ED8]/18"
                      : index === 2
                      ? "bg-[#EAF6F4] ring-[#0F766E]/16"
                      : "bg-[#F6EBDD] ring-[#D4A373]/28"
                  }`}
                >
                  <h3 className="text-xl font-semibold text-[#0B132B]">
                    {item.title}
                  </h3>
                  <p className="mt-3 body-regular text-[#5B6475]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[1.8rem] bg-[#081733] px-6 py-5 text-white shadow-[0_16px_40px_rgba(8,23,51,0.14)]">
            <div className="text-lg font-semibold tracking-[-0.02em]">
              Вы теряете прибыль каждый день
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-premium">
          <SectionTitle
            eyebrow={homePage.solution.eyebrow}
            title={homePage.solution.title}
            text={homePage.solution.text}
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {homePage.solution.items.map((item, index) => (
              <div
                key={item}
                className={`rounded-[1.7rem] px-5 py-5 ring-1 shadow-sm ${
                  index % 3 === 0
                    ? "bg-white ring-[#081733]/8"
                    : index % 3 === 1
                    ? "bg-[#EEF4FF] ring-[#1D4ED8]/18"
                    : "bg-[#F6EBDD] ring-[#D4A373]/24"
                }`}
              >
                <div className="body-regular text-[#334155]">{item}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.8rem] border border-[#081733]/8 bg-white px-6 py-5 shadow-sm">
            <div className="text-lg font-semibold tracking-[-0.02em] text-[#081733]">
              Вы видите весь бизнес в одном окне
            </div>
          </div>
        </div>
      </section>

      <section className="section-space premium-dark">
        <div className="container-premium">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <SectionTitle
              eyebrow={homePage.whyUs.eyebrow}
              title={homePage.whyUs.title}
              text={homePage.whyUs.text}
              light
            />

            <div className="grid gap-4 md:grid-cols-2">
              {homePage.whyUs.items.map((item, index) => (
                <div
                  key={item.title}
                  className={`rounded-[1.85rem] p-6 ring-1 ${
                    index % 2 === 0
                      ? "bg-white/8 ring-white/10"
                      : "bg-[#2D66F6]/12 ring-[#2D66F6]/18"
                  }`}
                >
                  <h3 className="card-display text-white">{item.title}</h3>
                  <p className="mt-3 body-regular text-[#D7DFEC]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-premium">
          <div className="premium-panel p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <SectionTitle
                eyebrow={homePage.pricing.eyebrow}
                title={homePage.pricing.title}
                text={homePage.pricing.text}
              />

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.8rem] bg-[#F6EBDD] p-6 ring-1 ring-[#D4A373]/28">
                  <div className="text-xs uppercase tracking-[0.24em] text-[#9A6A33]">
                    {homePage.pricing.install.title}
                  </div>
                  <div className="mt-4 text-[2rem] font-extrabold tracking-[-0.04em] text-[#081733]">
                    {homePage.pricing.install.price}
                  </div>
                  <div className="mt-4 space-y-2">
                    {homePage.pricing.install.items.map((item) => (
                      <div key={item} className="text-sm text-[#5B6475]">
                        — {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.8rem] bg-[#EEF4FF] p-6 ring-1 ring-[#1D4ED8]/18">
                  <div className="text-xs uppercase tracking-[0.24em] text-[#1D4ED8]">
                    {homePage.pricing.withAi.title}
                  </div>
                  <div className="mt-4 space-y-3">
                    {homePage.pricing.withAi.items.map((item) => (
                      <div
                        key={item}
                        className="text-[1.1rem] font-semibold text-[#081733]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.8rem] bg-white p-6 ring-1 ring-[#081733]/8">
                  <div className="text-xs uppercase tracking-[0.24em] text-[#081733]">
                    {homePage.pricing.withoutAi.title}
                  </div>
                  <div className="mt-4 space-y-3">
                    {homePage.pricing.withoutAi.items.map((item) => (
                      <div
                        key={item}
                        className="text-[1.1rem] font-semibold text-[#081733]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-[#081733] px-5 py-4 text-sm font-medium text-white">
              {homePage.pricing.note}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-premium">
          <div className="premium-panel p-6 lg:p-8">
            <SectionTitle
              eyebrow={homePage.cta.eyebrow}
              title={homePage.cta.title}
              text={homePage.cta.text}
            />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="button-premium-dark">
                Получить демонстрацию
              </Link>
              <Link href="/crm" className="button-premium-gold">
               Посмотреть возможности
             </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}