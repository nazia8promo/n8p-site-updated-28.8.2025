export function HeroSystemCard() {
  return (
    <div className="ml-auto w-full max-w-[620px]">
      <div className="rounded-[2rem] border border-[#081733]/8 bg-white/88 p-5 shadow-[0_16px_36px_rgba(8,23,51,0.06)] backdrop-blur-sm lg:p-6">
        <div className="text-xs uppercase tracking-[0.22em] text-[#7B8393]">
          Что внутри системы
        </div>

        <div className="mt-4 grid gap-3">
          {[
            "CRM с полной базой клиентов",
            "Чаты внутри системы",
            "Контроль менеджеров и переписок",
            "AI-assisted workflow",
            "Kanban и этапы продаж",
            "Аналитика и отчёты",
          ].map((item, index) => (
            <div
              key={item}
              className={`rounded-[1.35rem] px-4 py-4 ring-1 ${
                index % 3 === 0
                  ? "bg-white text-[#081733] ring-[#081733]/8"
                  : index % 3 === 1
                  ? "bg-[#EEF4FF] text-[#081733] ring-[#1D4ED8]/18"
                  : "bg-[#F6EBDD] text-[#081733] ring-[#D4A373]/24"
              }`}
            >
              <div className="text-sm leading-6">{item}</div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-[1.35rem] bg-[#081733] px-4 py-4 text-sm leading-6 text-white">
          Всё в одной системе. Без хаоса в WhatsApp и без перегруженной CRM.
        </div>
      </div>
    </div>
  );
}