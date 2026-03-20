import Link from "next/link";
import { ropPage } from "@/content/site/rop";
import { SectionTitle } from "@/components/site/SectionTitle";

export default function RopPage() {
  return (
    <div className="page-wrap pb-24">
      <section className="container-premium pt-8 pb-10 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF6F4] px-4 py-2 text-sm font-medium text-[#0F766E] ring-1 ring-[#0F766E]/16">
              Программа для РОП
            </div>

            <h1 className="editorial-title page-display max-w-4xl">
              {ropPage.hero.title}
            </h1>

            <p className="editorial-subtitle body-large max-w-3xl">
              {ropPage.hero.text}
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.2rem] bg-gradient-to-br from-[#0F766E]/10 via-[#D4A373]/10 to-[#1D4ED8]/10 blur-2xl" />
            <div className="premium-panel relative p-6">
              <div className="text-xs uppercase tracking-[0.30em] text-[#7B8393]">
                Management layer
              </div>
              <div className="mt-4 h-px w-16 bg-[#D4A373]" />
              <p className="mt-5 body-regular text-[#334155]">
                Страница для РОП должна ощущаться как управленческий
                инструмент: ownership, контроль команды, разбор потерь,
                структура ответственности и рабочая воронка.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#F8FAFC]">
        <div className="container-premium">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <SectionTitle
              eyebrow={ropPage.benefits.eyebrow}
              title={ropPage.benefits.title}
              text="На этой странице важно показать, что РОП получает не общие советы, а рабочую систему: как смотреть на команду, где видеть потери и как держать дисциплину."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {ropPage.benefits.items.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.8rem] px-5 py-5 ring-1 shadow-sm ${
                    index % 2 === 0
                      ? "bg-white ring-[#0B132B]/8"
                      : "bg-[#EAF6F4] ring-[#0F766E]/16"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0F766E]" />
                    <div className="body-regular text-[#334155]">
                      {item}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space premium-dark">
        <div className="container-premium">
          <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
            <SectionTitle
              eyebrow="Управленческий фокус"
              title="Ownership, контроль, разбор потерь и управляемая воронка — это ядро программы для РОП."
              text="Премиальная подача строится на уверенности: вы показываете, что умеете работать не только с навыком менеджера, но и с управленческой реальностью руководителя продаж."
              light
            />

            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Ownership по людям и сделкам",
                "Контроль без микроменеджмента",
                "Разбор потерь по этапам",
                "Дисциплина и прозрачность команды",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[1.8rem] px-5 py-5 ring-1 ${
                    index % 2 === 0
                      ? "bg-white/6 ring-white/10"
                      : "bg-[#0F766E]/14 ring-[#0F766E]/18"
                  }`}
                >
                  <div className="text-lg font-medium text-white">{item}</div>
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
              eyebrow="Следующий уровень"
              title="Когда логика управления собрана, её нужно перенести в рабочую среду команды."
              text="Именно здесь мост к S:O:S CRM выглядит уместно: CRM становится не отдельной тяжёлой системой, а продолжением выстроенной управленческой модели."
            />

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/crm" className="button-premium-dark">
                Смотреть S:O:S CRM
              </Link>
              <Link href="/companies" className="button-premium-gold">
                Для компаний
              </Link>
              <Link href="/contact" className="button-premium-blue">
                Записаться
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
