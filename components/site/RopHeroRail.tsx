export function RopHeroRail() {
  return (
    <div className="premium-panel overflow-hidden rounded-[2rem] p-6 lg:p-7">
      <div className="label-premium text-[#7B8393]">Management layer</div>

      <h3 className="mt-4 card-display text-[#081733]">
        Страница для РОП должна ощущаться как управленческий инструмент.
      </h3>

      <p className="mt-4 body-regular text-[#5B6475]">
        Ownership, контроль команды, разбор потерь, структура ответственности
        и рабочая воронка — это не “дополнение”, а главный слой страницы.
      </p>

      <div className="mt-6 grid gap-3">
        {[
          "Ownership по людям и сделкам",
          "Контроль по этапам, а не по интуиции",
          "Разбор потерь и узких мест процесса",
        ].map((item, index) => (
          <div
            key={item}
            className={`rounded-[1.35rem] px-4 py-4 ring-1 ${
              index === 0
                ? "bg-[#EEF4FF] text-[#081733] ring-[#2D66F6]/18"
                : index === 1
                ? "bg-[#EAF6F4] text-[#081733] ring-[#0F766E]/16"
                : "bg-[#F6EBDD] text-[#081733] ring-[#C88A35]/24"
            }`}
          >
            <div className="text-sm leading-6">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
