export function HeroSystemCard() {
  return (
    <div className="ml-auto w-full max-w-[760px]">
      <div
        style={{ background: "linear-gradient(180deg,#081733 0%,#0f274f 100%)" }}
        className="overflow-hidden rounded-[2rem] p-5 text-white ring-1 ring-white/10 shadow-[0_18px_46px_rgba(8,23,51,0.16)] lg:p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-white/55">
              Brand architecture
            </div>
            <div className="mt-3 text-[2.15rem] font-extrabold tracking-[-0.05em] text-white">
              Nazia8Promo
            </div>
          </div>

          <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-[#F3E0C4] ring-1 ring-white/10">
            academy + implementation
          </div>
        </div>

        <div className="mt-6 rounded-[1.8rem] bg-white/6 p-5 ring-1 ring-white/10">
          <div className="text-xs uppercase tracking-[0.2em] text-[#F3E0C4]">
            Layer 01
          </div>
          <div className="mt-3 text-[1.95rem] font-bold tracking-[-0.04em] text-white">
            Обучение и внедрение
          </div>
          <p className="mt-3 text-[1rem] leading-8 text-white/72">
            Nazia8Promo обучает МОП и РОП, выстраивает роли, ownership и
            ежедневную дисциплину продаж.
          </p>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.7rem] bg-[#2D66F6]/14 p-5 ring-1 ring-[#2D66F6]/22">
            <div className="text-xs uppercase tracking-[0.2em] text-[#CFE0FF]">
              Layer 02
            </div>
            <div className="mt-3 text-[1.7rem] font-bold tracking-[-0.04em] text-white">
              S:O:S Sales
            </div>
            <p className="mt-3 text-[0.98rem] leading-8 text-white/72">
              Sales Operating System как operating-layer для команды продаж.
            </p>
          </div>

          <div className="rounded-[1.7rem] bg-[#C88A35]/14 p-5 ring-1 ring-[#C88A35]/22">
            <div className="text-xs uppercase tracking-[0.2em] text-[#F3E0C4]">
              Layer 03
            </div>
            <div className="mt-3 text-[1.7rem] font-bold tracking-[-0.04em] text-white">
              S:O:S CRM
            </div>
            <p className="mt-3 text-[0.98rem] leading-8 text-white/72">
              WhatsApp-first CRM layer внутри S:O:S Sales.
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-[1.7rem] bg-white/6 p-5 ring-1 ring-white/10">
          <div className="text-xs uppercase tracking-[0.2em] text-white/55">
            Operating logic
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "МОП / РОП / компании",
              "roles + ownership",
              "workflow discipline",
              "product layer inside",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full bg-white/8 px-4 py-2.5 text-sm text-white/85 ring-1 ring-white/10"
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