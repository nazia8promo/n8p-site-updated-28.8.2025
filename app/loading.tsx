export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-6">
      <div className="premium-panel w-full max-w-xl p-10 text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#D4A373]/30 border-t-[#0B132B]" />
        <h2 className="mt-6 text-3xl font-semibold text-[#0B132B]">
          Загружаем страницу
        </h2>
        <p className="mt-4 text-base leading-8 text-slate-600">
          Подготавливаем интерфейс Nazia8Promo.kz
        </p>
      </div>
    </div>
  );
}
