import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#081733]/10 bg-white py-12">
      <div className="container-premium">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-[#081733]">Nazia8Promo</h3>
            <p className="mt-2 text-sm text-[#5B6475]">
              Премиальная академия продаж
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-[#081733]">Навигация</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-[#5B6475] hover:text-[#1D4ED8]">
                  Об академии
                </Link>
              </li>
              <li>
                <Link href="/rop" className="text-sm text-[#5B6475] hover:text-[#1D4ED8]">
                  РОП
                </Link>
              </li>
              <li>
                <Link href="/mop" className="text-sm text-[#5B6475] hover:text-[#1D4ED8]">
                  МОП
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-[#081733]">Продукты</h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/crm" className="text-sm text-[#5B6475] hover:text-[#1D4ED8]">
                  S:O:S CRM
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-[#081733]">Контакты</h4>
            <ul className="mt-3 space-y-2">
              <li className="text-sm text-[#5B6475]">
                Kazakhstan & CIS
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[#1D4ED8] hover:underline">
                  Связаться с нами
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-[#081733]/10 pt-6 text-center text-sm text-[#5B6475]">
          © {new Date().getFullYear()} Nazia8Promo. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
