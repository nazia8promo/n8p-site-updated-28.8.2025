import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="max-w-3xl">
        <div className="inline-flex rounded-full bg-[#F6EBDD] px-4 py-2 text-sm text-[#9A6A33]">
          404
        </div>

        <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-[#0B132B] md:text-7xl">
          Страница не найдена
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Возможно, ссылка изменилась или страница ещё не опубликована.
          Вернитесь на главную или откройте нужный раздел сайта.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href="/" className="button-premium-dark">
            На главную
          </Link>
          <Link href="/contact" className="button-premium-gold">
            Контакты
          </Link>
        </div>
      </div>
    </div>
  );
}
