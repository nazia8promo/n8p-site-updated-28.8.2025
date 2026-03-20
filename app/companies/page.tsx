import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/site/metadata";
import { companiesPage } from "@/content/site/companies";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CompaniesHeroRail } from "@/components/site/CompaniesHeroRail";

export const metadata: Metadata = pageMetadata.companies;

export default function CompaniesPage() {
  return (
    <div className="page-wrap pb-24">
      <section className="container-premium pt-6 pb-7 lg:pt-8">
        <div className="grid items-start gap-6 lg:grid-cols-[0.96fr_1.04fr]">
          <div>
            <div className="inline-flex rounded-full bg-[#F6EBDD] px-5 py-3 text-sm text-[#9A6323] ring-1 ring-[#C88A35]/22">
              Корпоративный формат
            </div>

            <h1 className="mt-6 max-w-3xl page-display text-[#081733]">
              {companiesPage.hero.title}
            </h1>

            <p className="mt-6 max-w-3xl body-large text-[#5B6475]">
              {companiesPage.hero.text}
            </p>
          </div>

          <CompaniesHeroRail />
        </div>
      </section>

      <section className="section-space bg-[#F8FAFC]">
        <div className="container-premium">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionTitle
              eyebrow={companiesPage.benefits.eyebrow}
              title={companiesPage.benefits.title}
              text={companiesPage.benefits.text}
            />

            <div className="grid gap-4 md:grid-cols-2">
              {companiesPage.benefits.items.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.85rem] px-6 py-6 ring-1 shadow-sm ${
                    index % 2 === 0
                      ? "bg-white ring-[#081733]/8"
                      : "bg-[#F6EBDD] ring-[#C88A35]/20"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-4 w-1 rounded-full bg-[#C88A35]" />
                    <div className="body-large text-[#334155]">{item}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-premium">
          <div className="premium-band premium-dark p-6 lg:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
              <SectionTitle
                eyebrow={companiesPage.model.eyebrow}
                title={companiesPage.model.title}
                text={companiesPage.model.text}
                light
              />

              <div className="grid gap-4 md:grid-cols-2">
                {companiesPage.model.items.map((item, index) => (
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
              eyebrow={companiesPage.bridge.eyebrow}
              title={companiesPage.bridge.title}
              text={companiesPage.bridge.text}
            />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="button-premium-dark">
                Обсудить внедрение
              </Link>
              <Link href="/rop" className="button-premium-gold">
                Программа для РОП
              </Link>
              <Link href="/crm" className="button-premium-blue">
                Перейти к S:O:S CRM
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
