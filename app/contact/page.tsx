import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site/metadata";

export const metadata: Metadata = pageMetadata.contact;

import Link from "next/link";
import { contactPage } from "@/content/site/contact";
import { SectionTitle } from "@/components/site/SectionTitle";

export default function ContactPage() {
  return (
    <div className="page-wrap pb-24">
      <section className="container-premium pt-8 pb-10 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EEF4FF] px-4 py-2 text-sm font-medium text-[#1D4ED8] ring-1 ring-[#1D4ED8]/18">
              Контакт и следующий шаг
            </div>

            <h1 className="editorial-title page-display max-w-4xl">
              {contactPage.hero.title}
            </h1>

            <p className="editorial-subtitle body-large max-w-3xl">
              {contactPage.hero.text}
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.2rem] bg-gradient-to-br from-[#1D4ED8]/10 via-[#D4A373]/10 to-transparent blur-2xl" />
            <div className="premium-panel relative p-6">
              <div className="text-xs uppercase tracking-[0.30em] text-[#7B8393]">
                Contact architecture
              </div>
              <div className="mt-4 h-px w-16 bg-[#D4A373]" />
              <p className="mt-5 body-regular text-[#334155]">
                Контактная страница не должна быть формальностью. Она
                должна помогать человеку выбрать правильный сценарий входа
                внутрь экосистемы.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-premium">
          <SectionTitle
            eyebrow="Сценарии входа"
            title="Три понятных способа начать разговор"
            text="Здесь не нужен длинный текст. Нужны ясные варианты: стратегия, быстрый контакт или продуктовая демонстрация."
          />

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {contactPage.options.map((item, index) => (
              <div key={item.title} className="premium-panel p-6">
                <div
                  className={`inline-flex rounded-2xl px-3 py-2 text-xs uppercase tracking-[0.28em] ring-1 ${
                    index === 0
                      ? "bg-white text-[#0B132B] ring-[#0B132B]/8"
                      : index === 1
                      ? "bg-[#EEF4FF] text-[#1D4ED8] ring-[#1D4ED8]/18"
                      : "bg-[#F6EBDD] text-[#9A6A33] ring-[#D4A373]/28"
                  }`}
                >
                  Option
                </div>

                <div className="mt-6 h-px w-14 bg-[#D4A373]" />
                <h3 className="mt-6 card-display font-semibold text-[#0B132B]">
                  {item.title}
                </h3>
                <p className="mt-4 body-regular text-[#5B6475]">
                  {item.text}
                </p>

                <div className="mt-8">
                  <Link
                    href={index === 2 ? "/crm" : "/contact"}
                    className={
                      index === 0
                        ? "button-premium-dark"
                        : index === 1
                        ? "button-premium-blue"
                        : "button-premium-gold"
                    }
                  >
                    {index === 0
                      ? "Выбрать этот формат"
                      : index === 1
                      ? "Открыть WhatsApp"
                      : "Запросить демо"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space premium-dark">
        <div className="container-premium">
          <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
            <SectionTitle
              eyebrow="Экосистема бренда"
              title="Nazia8Promo — academy + implementation. S:O:S CRM — product layer. У каждого направления свой вход, но одна экосистема."
              text="Это не два случайных направления и не набор услуг. Это связанная система: обучение, внедрение и продукт, которые усиливают друг друга."
              light
            />

            <div className="grid gap-4">
              {[
                "Стратегия и диагностика как вход в внедрение",
                "WhatsApp как быстрый вход в диалог",
                "CRM как продуктовый слой для демонстрации",
                "Одна архитектура бренда вместо хаотичных услуг",
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
          <div className="premium-panel p-6 lg:p-8">
            <SectionTitle
              eyebrow="Последний переход"
              title="Выбери правильный маршрут и перейди к действию"
              text="Контактная страница должна не завершать движение, а переводить человека в следующий понятный шаг."
            />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/" className="button-premium-dark">
                Вернуться на главную
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
