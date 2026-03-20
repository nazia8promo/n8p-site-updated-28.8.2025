"use client";

export default function GlobalError({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-[#FAF7F2] text-[#1F2937]">
        <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16">
          <div className="premium-panel max-w-3xl p-10">
            <div className="inline-flex rounded-full bg-[#F6EBDD] px-4 py-2 text-sm text-[#9A6A33]">
              Critical error
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-[#0B132B] md:text-6xl">
              Сайт временно не может загрузиться
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Произошла критическая ошибка интерфейса. Обнови страницу или
              попробуй ещё раз.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button onClick={() => reset()} className="button-premium-dark">
                Перезагрузить
              </button>
              <a href="/" className="button-premium-gold">
                На главную
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
