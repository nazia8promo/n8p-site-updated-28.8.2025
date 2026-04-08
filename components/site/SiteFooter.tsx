import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#081733]/10 bg-white py-10 md:py-12">
      <div className="container-premium">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-[1.2rem] font-extrabold tracking-[-0.04em] text-[#081733]">
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
            <ul className="mt-4 space-y-2.5">
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
              <li>
                <Link href="/crm" className="text-sm text-[#5B6475] hover:text-[#1fb6a6]">
                  S:O:S CRM
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#081733]">
              Контакты
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="https://wa.me/77478089359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#1D4ED8] hover:underline"
                >
                  WhatsApp: +7 747 808 9359
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@nazia8promo.kz"
                  className="text-sm text-[#1D4ED8] hover:underline"
                >
                  info@nazia8promo.kz
                </a>
              </li>
              <li className="text-sm leading-6 text-[#5B6475]">
                г. Астана, пр. Туран 59/2, офис 269
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#081733]">
              Реквизиты
            </h4>
            <div className="mt-4 space-y-2 text-sm leading-6 text-[#5B6475]">
              <div>ИП «NAZIA8PROMO»</div>
              <div>БИН (ИИН): 870623402288</div>
              <div>АО «Kaspi Bank»</div>
              <div>КБе: 19</div>
              <div>БИК: CASPKZKA</div>
              <div className="break-all">KZ93722S000007306827</div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#081733]/10 pt-5 text-center text-sm text-[#5B6475]">
          © {new Date().getFullYear()} Nazia8Promo. Все права защищены.
        </div>
      </div>
    </footer>
  );
}