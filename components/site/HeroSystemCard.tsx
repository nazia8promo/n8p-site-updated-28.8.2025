export function HeroSystemCard() {
  return (
    <div className="premium-dark overflow-hidden rounded-[2.2rem] p-6 text-white ring-1 ring-white/10 shadow-[0_24px_70px_rgba(8,23,51,0.22)] lg:p-7">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-white/55">
            Brand architecture
          </div>
          <div className="mt-2 text-[2rem] font-extrabold tracking-[-0.04em] text-white">
            Nazia8Promo
          </div>
        </div>

        <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-[#F3E0C4] ring-1 ring-white/10">
          academy + implementation
        </div>
      </div>

      <div className="mt-6 grid gap-3">
        <div className="rounded-[1.5rem] bg-white/6 p-5 ring-1 ring-white/10">
          <div className="text-xs uppercase tracking-[0.18em] text-[#F3E0C4]">
            Layer 01
          </div>
          <div className="mt-3 text-2xl font-bold tracking-[-0.03em] text-white">
            Обучение и внедрение
          </div>
          <p className="mt-3 text-base leading-7 text-white/72">
            Nazia8Promo обучает МОП и РОП, выстраивает роли, ownership и
            ежедневную дисциплину продаж.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-[1.5rem] bg-[#2D66F6]/14 p-5 ring-1 ring-[#2D66F6]/22">
            <div className="text-xs uppercase tracking-[0.18em] text-[#CFE0FF]">
              Layer 02
            </div>
            <div className="mt-3 text-xl font-bold tracking-[-0.03em] text-white">
              S:O:S Sales
            </div>
            <p className="mt-3 text-sm leading-7 text-white/74">
              Sales Operating System как operating-layer для команды продаж.
            </p>
          </div>

          <div className="rounded-[1.5rem] bg-[#C88A35]/14 p-5 ring-1 ring-[#C88A35]/22">
            <div className="text-xs uppercase tracking-[0.18em] text-[#F3E0C4]">
              Layer 03
            </div>
            <div className="mt-3 text-xl font-bold tracking-[-0.03em] text-white">
              S:O:S CRM
            </div>
            <p className="mt-3 text-sm leading-7 text-white/74">
              WhatsApp-first CRM layer внутри S:O:S Sales.
            </p>
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-white/6 p-5 ring-1 ring-white/10">
          <div className="text-xs uppercase tracking-[0.18em] text-white/55">
            Operating logic
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "МОП / РОП / компании",
              "roles + ownership",
              "workflow discipline",
              "product layer inside",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full bg-white/8 px-3 py-2 text-sm text-white/82 ring-1 ring-white/10"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
