import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-wrap pb-24">
      <section className="container-premium pt-10 pb-12 lg:pt-14 lg:pb-16">
        <div className="premium-panel max-w-4xl p-8 lg:p-10">
          <div className="label-premium text-[#2D66F6]">404</div>

          <h1 className="mt-5 page-display text-[#081733]">
            Такой страницы здесь нет.
          </h1>

          <p className="mt-6 max-w-2xl body-large text-[#5B6475]">
            Возможно, ссылка устарела или страница была перемещена. Вернитесь на
            главную, перейдите к программам или откройте страницу S:O:S CRM.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/" className="button-premium-dark">
              На главную
            </Link>
            <Link href="/rop" className="button-premium-gold">
              Программа для РОП
            </Link>
            <Link href="/crm" className="button-premium-blue">
              Открыть S:O:S CRM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
