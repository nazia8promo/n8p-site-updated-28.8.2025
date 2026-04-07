import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#081733]/10 bg-white py-14">
      <div className="container-premium">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-[1.35rem] font-extrabold tracking-[-0.04em] text-[#081733]">
              Nazia8Promo
            </h3>
            <p className="mt-3 text-sm leading-7 text-[#5B6475]">
              Внедрение системы продаж, обучение команды и связка с S:O:S CRM
              для Казахстана и СНГ.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#081733]">
              Навигация
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/" className="text-sm text-[#5B6475] hover:text-[#1fb6a6]">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/mop" className="text-sm text-[#5B6475] hover:text-[#1fb6a6]">
                  МОП
                </Link>
              </li>
              <li>
                <Link href="/rop" className="text-sm text-[#5B6475] hover:text-[#1fb6a6]">
                  РОП
                </Link>
              </li>
              <li>
                <Link href="/companies" className="text-sm text-[#5B6475] hover:text-[#1fb6a6]">
                  Для компаний
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#081733]">
              Продукт
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/crm" className="text-sm text-[#5B6475] hover:text-[#1fb6a6]">
                  S:O:S CRM
                </Link>
              </li>
              <li className="text-sm text-[#5B6475]">
                WhatsApp-first workflow
              </li>
              <li className="text-sm text-[#5B6475]">
                Kanban + ownership
              </li>
              <li className="text-sm text-[#5B6475]">
                AI-assisted layer
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#081733]">
              Контакт
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="text-sm text-[#5B6475]">Kazakhstan & CIS</li>
              <li>
                <Link href="/contact" className="text-sm text-[#1D4ED8] hover:underline">
                  Получить демонстрацию
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[#1D4ED8] hover:underline">
                  Написать в WhatsApp
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#081733]/10 pt-6 text-center text-sm text-[#5B6475]">
          © {new Date().getFullYear()} Nazia8Promo. Все права защищены.
        </div>
      </div>
    </footer>
  );
}