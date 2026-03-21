export function CrmHeroRail() {
  return (
    <div className="premium-dark overflow-hidden rounded-[2rem] p-6 text-white ring-1 ring-white/10 shadow-[0_24px_70px_rgba(8,23,51,0.22)] lg:p-7">
      <div className="label-premium text-[#F3E0C4]">Product framing</div>
      <h3 className="mt-4 card-display text-white">
        S:O:S CRM — не отдельный хаотичный продукт, а CRM layer внутри S:O:S Sales.
      </h3>
      <p className="mt-4 body-regular text-white/72">
        Здесь важно показать ясную продуктовую логику: WhatsApp-first workflow, Kanban, ownership, role-based access, practical analytics и AI-assisted layer без unsafe-обещаний.
      </p>
      <div className="mt-6 grid gap-3">
        {[
          "WhatsApp-first sales workflow",
          "Kanban + ownership как рабочая логика",
          "Role-based visibility для МОП / РОП",
        ].map((item, index) => (
          <div
            key={item}
            className={`rounded-[1.35rem] px-4 py-4 ring-1 ${
              index === 0
                ? "bg-white/8 ring-white/10"
                : index === 1
                ? "bg-[#2D66F6]/14 ring-[#2D66F6]/22"
                : "bg-[#C88A35]/14 ring-[#C88A35]/22"
            }`}
          >
            <div className="text-sm leading-6 text-white/90">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
