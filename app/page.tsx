import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site/metadata";

export const metadata: Metadata = pageMetadata.home;

import Link from "next/link";
import { homePage } from "@/content/site/home";
import { SectionTitle } from "@/components/site/SectionTitle";
import { AnimationPlaceholder } from "@/components/site/AnimationPlaceholder";
import { CTAButtons } from "@/components/site/CTAButtons";
import { HomeMotionPlaceholder } from "@/components/site/HomeMotionPlaceholder";

export default function HomePage() {
  return (
    <div className="page-wrap pb-24">
      <section className="container-premium pt-8 pb-12 lg:pt-14">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_0.92fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F6EBDD] px-4 py-2 text-sm font-medium text-[#9A6A33] ring-1 ring-[#D4A373]/40">
              {homePage.hero.badge}
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="gold-line" />
                <div className="text-xs font-semibold uppercase tracking-[0.34em] text-[#7B8393]">
                  Kazakhstan & CIS
                </div>
              </div>

              <h1 className="editorial-title hero-display max-w-[42rem]">
                {homePage.hero.title}
              </h1>

              <p className="editorial-subtitle body-large max-w-[34rem]">
                {homePage.hero.text}
              </p>
            </div>

            <CTAButtons
              primary={homePage.hero.primaryCta}
              secondary={homePage.hero.secondaryCta}
            />

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="premium-card p-4">
                <div className="text-xs uppercase tracking-[0.28em] text-[#1D4ED8]">
                  Academy
                </div>
                <p className="mt-3 text-sm leading-7 text-[#334155]">
                  Обучение МОП и РОП под реальные сценарии продаж.
                </p>
              </div>

              <div className="premium-card tint-blue p-4">
                <div className="text-xs uppercase tracking-[0.28em] text-[#1D4ED8]">
                  Implementation
                </div>
                <p className="mt-3 text-sm leading-7 text-[#334155]">
                  Внедрение процесса, ownership и дисциплины команды.
                </p>
              </div>

              <div className="premium-card tint-gold p-4">
                <div className="text-xs uppercase tracking-[0.28em] text-[#9A6A33]">
                  Product layer
                </div>
                <p className="mt-3 text-sm leading-7 text-[#334155]">
                  S:O:S CRM как среда для закрепления результата.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[2.8rem] bg-gradient-to-br from-[#1D4ED8]/12 via-[#D4A373]/10 to-[#0F766E]/10 blur-3xl" />

            <div className="premium-band premium-dark relative p-7 lg:p-8">
              <div className="relative">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <div className="text-sm text-[#94A3B8]">
                      Brand architecture
                    </div>
                    <div className="mt-1 text-2xl font-semibold text-white">
                      Nazia8Promo Ecosystem
                    </div>
                  </div>

                  <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-[#D4A373] ring-1 ring-white/10">
                    Ultra premium
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="glass-dark rounded-[1.75rem] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs uppercase tracking-[0.30em] text-[#D4A373]">
                          Primary role
                        </div>
                        <div className="mt-2 text-2xl font-semibold text-white">
                          Sales Academy + Implementation
                        </div>
                        <p className="mt-3 max-w-md text-sm leading-7 text-[#CBD5E1]">
                          Не агентство "на все случаи", а премиальная система
                          обучения и внедрения для продаж, построенных вокруг
                          реальной работы команды.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-[1.6rem] bg-white p-5 ring-1 ring-white/10">
                      <div className="text-xs uppercase tracking-[0.30em] text-[#1D4ED8]">
                        Audience split
                      </div>
                      <div className="mt-3 text-lg font-semibold text-[#0B132B]">
                        МОП / РОП / B2B
                      </div>
                      <p className="mt-2 text-sm leading-7 text-[#5B6475]">
                        Три отдельных входа, один уровень системы.
                      </p>
                    </div>

                    <div className="rounded-[1.6rem] bg-[#EAF6F4] p-5 ring-1 ring-[#0F766E]/16">
                      <div className="text-xs uppercase tracking-[0.30em] text-[#0F766E]">
                        Result logic
                      </div>
                      <div className="mt-3 text-lg font-semibold text-[#0B132B]">
                        От навыка к внедрению
                      </div>
                      <p className="mt-2 text-sm leading-7 text-[#3F5A56]">
                        Обучение должно жить в ежедневной практике команды.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] bg-[#111C3D] p-5 ring-1 ring-white/10">
                    <div className="text-xs uppercase tracking-[0.30em] text-[#93C5FD]">
                      Product layer
                    </div>
                    <div className="mt-2 text-xl font-semibold text-white">
                      S:O:S CRM
                    </div>
                    <p className="mt-3 max-w-md text-sm leading-7 text-[#CBD5E1]">
                      WhatsApp-first CRM, Kanban, ownership, role-based workflow
                      и AI-assisted слой как продолжение academy-модели.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motion Placeholder — сразу после hero */}
      <section className="section-space pt-2">
        <div className="container-premium">
          <HomeMotionPlaceholder />
        </div>
      </section>

      <section className="section-space bg-[#F8FAFC]">
        <div className="container-premium">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <SectionTitle
              eyebrow={homePage.problem.eyebrow}
              title={homePage.problem.title}
              text="Премиальный сайт не шумит функциями. Он точно объясняет, что именно ломается в отделе продаж и почему это больше не работает."
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
        </div>
      </section>

      <section className="section-space">
        <div className="container-premium">
          <SectionTitle
            eyebrow={homePage.audiences.eyebrow}
            title={homePage.audiences.title}
            text={homePage.audiences.text}
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {homePage.audiences.items.map((item, index) => (
              <div
                key={item.title}
                className="premium-panel p-5"
              >
                <div
                  className={`inline-flex rounded-2xl px-3 py-2 text-xs uppercase tracking-[0.28em] ring-1 ${
                    index === 0
                      ? "bg-[#EEF4FF] text-[#1D4ED8] ring-[#1D4ED8]/18"
                      : index === 1
                      ? "bg-[#EAF6F4] text-[#0F766E] ring-[#0F766E]/16"
                      : "bg-[#F6EBDD] text-[#9A6A33] ring-[#D4A373]/28"
                  }`}
                >
                  {item.title}
                </div>

                <div className="mt-6 h-px w-14 bg-[#D4A373]" />

                <h3 className="mt-5 card-display font-semibold text-[#0B132B]">
                  {item.title}
                </h3>
                <p className="mt-4 body-regular text-[#5B6475]">
                  {item.text}
                </p>

                <Link
                  href={item.href!}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#1D4ED8]"
                >
                  Открыть страницу →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space premium-dark">
        <div className="container-premium">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <SectionTitle
              eyebrow={homePage.method.eyebrow}
              title={homePage.method.title}
              text="Вместо абстрактной философии — ясный маршрут: диагностика, обучение, внедрение и закрепление в рабочей среде."
              light
            />

            <div className="grid gap-4 md:grid-cols-2">
              {homePage.method.items.map((item, index) => (
                <div
                  key={item.step}
                  className={`rounded-[1.9rem] p-6 ring-1 ${
                    index === 0
                      ? "bg-white/6 ring-white/10"
                      : index === 1
                      ? "bg-[#1D4ED8]/14 ring-[#1D4ED8]/20"
                      : index === 2
                      ? "bg-[#0F766E]/14 ring-[#0F766E]/18"
                      : "bg-[#D4A373]/12 ring-[#D4A373]/18"
                  }`}
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.30em] text-[#D4A373]">
                    {item.step}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 body-regular text-[#CBD5E1]">
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
          <div className="grid gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
            <SectionTitle
              eyebrow="Почему это выглядит дороже"
              title="Мы строим не просто лендинг, а бренд с архитектурой: academy, implementation и product layer."
              text="Это не набор услуг и не случайный сайт. Это экосистема, в которой каждая часть усиливает другую."
            />

            <div className="grid gap-4">
              <div className="premium-card p-7">
                <div className="text-xs uppercase tracking-[0.28em] text-[#1D4ED8]">
                  Academy-first
                </div>
                <p className="mt-4 body-regular text-[#5B6475]">
                  Сайт и бренд построены вокруг обучения и системной логики продаж,
                  а не вокруг набора услуг без ядра.
                </p>
              </div>

              <div className="premium-card tint-emerald p-7">
                <div className="text-xs uppercase tracking-[0.28em] text-[#0F766E]">
                  Implementation-driven
                </div>
                <p className="mt-4 body-regular text-[#5B6475]">
                  Мы говорим не только об обучении, но и о том, как знания
                  превращаются в ежедневную практику команды.
                </p>
              </div>

              <div className="premium-card tint-gold p-7">
                <div className="text-xs uppercase tracking-[0.28em] text-[#9A6A33]">
                  Product-connected
                </div>
                <p className="mt-4 body-regular text-[#5B6475]">
                  S:O:S CRM встроена в архитектуру как отдельный product-layer,
                  который закрепляет методику в рабочем процессе.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-premium">
          <div className="premium-band premium-dark p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#D4A373]/14 px-4 py-2 text-sm text-[#D4A373] ring-1 ring-[#D4A373]/20">
                  {homePage.crm.eyebrow}
                </div>

                <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                  {homePage.crm.title}
                </h2>

                <p className="mt-4 max-w-2xl body-regular text-[#CBD5E1] md:text-lg">
                  {homePage.crm.text}
                </p>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/crm"
                    className="button-premium-gold"
                  >
                    Открыть страницу CRM
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white transition hover:bg-white/10"
                  >
                    Запросить демо
                  </Link>
                </div>
              </div>

              <div className="grid gap-4">
                {homePage.crm.bullets.map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-[1.8rem] px-5 py-5 text-sm leading-7 text-[#E2E8F0] ring-1 ${
                      index % 2 === 0
                        ? "bg-white/5 ring-white/10"
                        : "bg-[#1D4ED8]/14 ring-[#1D4ED8]/20"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
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
                Оставить заявку
              </Link>
              <Link href="/contact" className="button-premium-blue">
                Написать в WhatsApp
              </Link>
              <Link href="/crm" className="button-premium-gold">
                Запросить demo CRM
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}