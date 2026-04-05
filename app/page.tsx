import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site/metadata";

export const metadata: Metadata = pageMetadata.home;

import Link from "next/link";
import { homePage } from "@/content/site/home";
import { SectionTitle } from "@/components/site/SectionTitle";
import { AnimationPlaceholder } from "@/components/site/AnimationPlaceholder";
import { HomeMotionPlaceholder } from "@/components/site/HomeMotionPlaceholder";
import { HeroSystemCard } from "@/components/site/HeroSystemCard";

export default function HomePage() {
  return (
    <div className="page-wrap pb-24">
      <section className="container-premium pt-8 pb-12 lg:pt-14">
        <div className="grid items-start gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-8">
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

              <p className="editorial-subtitle body-large max-w-[34rem]">
                {homePage.hero.text}
              </p>
            </div>

            {/* ЗАМЕНА: CTAButtons → три кнопки */}
            <div className="flex flex-col gap-5 rounded-[2rem] bg-white/65 p-6 backdrop-blur-sm">
              <Link href="/contact" className="button-premium-dark">
                Оставить заявку
              </Link>
              <Link href="/companies" className="button-premium-gold">
                Для компаний
              </Link>
              <Link href="/crm" className="button-premium-blue">
                Посмотреть CRM
              </Link>
            </div>

            {/* ЗАМЕНА: три маленькие карточки под hero */}
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[#081733]/8 bg-white px-4 py-4 shadow-sm">
                <div className="text-xs uppercase tracking-[0.18em] text-[#1fb6a6]">
                  Academy
                </div>
                <p className="mt-2 text-sm leading-6 text-[#4B5563]">
                  Обучение МОП и РОП под реальные сценарии продаж.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[#081733]/8 bg-white px-4 py-4 shadow-sm">
                <div className="text-xs uppercase tracking-[0.18em] text-[#1fb6a6]">
                  Implementation
                </div>
                <p className="mt-2 text-sm leading-6 text-[#4B5563]">
                  Внедрение процесса, ownership и дисциплины команды.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[#081733]/8 bg-white px-4 py-4 shadow-sm">
                <div className="text-xs uppercase tracking-[0.18em] text-[#C88A35]">
                  Product layer
                </div>
                <p className="mt-2 text-sm leading-6 text-[#4B5563]">
                  S:O:S CRM как среда для закрепления результата.
                </p>
              </div>
            </div>
          </div>

          <HeroSystemCard />
        </div>
      </section>

      {/* Motion Placeholder — сразу после hero */}
      <section className="pt-3 pb-6 lg:pt-4 lg:pb-8">
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