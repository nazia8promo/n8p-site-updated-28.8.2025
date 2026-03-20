import Link from "next/link";
import { siteNavigation } from "@/lib/site/navigation";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="text-lg font-semibold tracking-[0.16em] text-[#0B132B]">
              NAZIA 8 PROMO
            </div>
            <p className="mt-4 max-w-md text-base leading-8 text-slate-600">
              Academy-first бренд для обучения продажам, корпоративного внедрения
              и закрепления системы продаж в рабочей среде.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1D4ED8]">
              Навигация
            </div>
            <div className="mt-4 flex flex-col gap-3">
              {siteNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-600 transition hover:text-[#0B132B]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1D4ED8]">
              Архитектура
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div>Nazia8Promo = academy + implementation</div>
              <div>S:O:S Sales = Sales Operating System</div>
              <div>S:O:S CRM = CRM layer inside S:O:S Sales</div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © Nazia8Promo.kz — premium sales academy, implementation and sales operating system
        </div>
      </div>

      <div className="h-20 md:hidden" />
    </footer>
  );
}
