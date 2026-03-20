export function CompaniesHeroRail() {
  return (
    <div className="premium-panel overflow-hidden rounded-[2rem] p-6 lg:p-7">
      <div className="label-premium text-[#7B8393]">Executive view</div>

      <h3 className="mt-4 card-display text-[#081733]">
        Страница для компании должна продавать не курс, а внедрение системы продаж.
      </h3>

      <p className="mt-4 body-regular text-[#5B6475]">
        Собственнику и руководителю нужен не “ещё один обучающий блок”, а
        понятная модель: роли, ownership, рабочая воронка, дисциплина команды
        и последующее закрепление в sales-среде.
      </p>

      <div className="mt-6 grid gap-3">
        {[
          "Роли: собственник / РОП / МОП",
          "Workflow discipline и управляемая воронка",
          "Внедрение без перегруза тяжёлой CRM-логикой",
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
