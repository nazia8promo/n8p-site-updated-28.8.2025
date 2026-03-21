import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/site/metadata";
import { crmPage } from "@/content/site/crm";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CrmProofRail } from "@/components/site/CrmProofRail";
import { CrmHeroRail } from "@/components/site/CrmHeroRail";

export const metadata: Metadata = pageMetadata.crm;

export default function CrmPage() {
  return (
    <div className="page-wrap pb-24">
      <section className="container-premium pt-6 pb-7 lg:pt-8">
        <div className="grid items-start gap-6 lg:grid-cols-[0.96fr_1.04fr]">
          <div>
            <div className="inline-flex rounded-full bg-[#EEF4FF] px-5 py-3 text-sm text-[#2D66F6] ring-1 ring-[#2D66F6]/18">
              CRM layer inside S:O:S Sales
            </div>
            <h1 className="mt-6 max-w-3xl page-display text-[#081733]">
              {crmPage.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl body-large text-[#5B6475]">
              {crmPage.hero.text}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="button-premium-dark">
                Запросить demo
              </Link>
              <Link href="/" className="button-premium-gold">
                Вернуться на главную
              </Link>
            </div>
          </div>
          <CrmHeroRail />
        </div>
      </section>

      <section className="pt-2 pb-6 lg:pt-3 lg:pb-8">
        <div className="container-premium">
          <CrmProofRail />
        </div>
      </section>

      <section className="section-space bg-[#F8FAFC]">
        <div className="container-premium">
          <SectionTitle
            eyebrow="Ключевые блоки продукта"
            title="S:O:S CRM показывает не длинный список модулей, а прикладную рабочую логику команды продаж."
            text="На странице важно продавать ясность: почему продукт легче понять, показать и встроить в реальную работу команды."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {crmPage.features.items.map((item, index) => (
              <div key={item.title} className="premium-panel p-6">
                <div
                  className={`inline-flex rounded-2xl px-3 py-2 text-[11px] uppercase tracking-[0.22em] ring-1 ${
                    index === 0
                      ? "bg-[#EEF4FF] text-[#2D66F6] ring-[#2D66F6]/18"
                      : index === 1
                      ? "bg-[#EAF6F4] text-[#0F766E] ring-[#0F766E]/16"
                      : index === 2
                      ? "bg-[#F6EBDD] text-[#9A6323] ring-[#C88A35]/24"
                      : "bg-[#EEF4FF] text-[#2D66F6] ring-[#2D66F6]/18"
                  }`}
                >
                  Feature
                </div>
                <div className="mt-5 h-px w-14 bg-[#C88A35]" />
                <h3 className="mt-5 card-display text-[#081733]">
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

      <section className="section-space">
        <div className="container-premium">
          <div className="premium-band premium-dark p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
              <SectionTitle
                eyebrow="Позиция продукта"
                title="S:O:S CRM выигрывает не перегруженностью, а ясностью: он понятнее для команды и ближе к реальному sales-workflow."
                text="Продукт не должен выглядеть как тяжёлый комбайн. Он должен ощущаться как рабочая sales-среда, где роли, ownership, этапы и видимость собраны в понятную логику."
                light
              />
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Ближе к реальным WhatsApp-продажам",
                  "Легче внедрить команде",
                  "Поддерживает ownership и следующий шаг",
                  "Усиливает academy и implementation",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-[1.85rem] px-6 py-6 ring-1 ${
                      index % 2 === 0
                        ? "bg-white/8 ring-white/10"
                        : "bg-[#2D66F6]/12 ring-[#2D66F6]/18"
                    }`}
                  >
                    <div className="card-display text-white">{item}</div>
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
              eyebrow="Связка с Nazia8Promo"
              title="Nazia8Promo обучает и внедряет. S:O:S Sales даёт operating-layer. S:O:S CRM закрепляет систему продаж в рабочей CRM-среде."
              text="Так продукт не спорит с academy-моделью, а становится её логичным продолжением."
            />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="button-premium-dark">
                Обсудить demo
              </Link>
              <Link href="/companies" className="button-premium-gold">
                Корпоративное внедрение
              </Link>
              <Link href="/rop" className="button-premium-blue">
                Программа для РОП
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
