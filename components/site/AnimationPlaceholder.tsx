type Props = {
  variant?: "academy" | "kanban";
};

export function AnimationPlaceholder({
  variant = "academy",
}: Props) {
  if (variant === "kanban") {
    return (
      <section className="storyboard-shell overflow-hidden p-5 lg:p-7">
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="space-y-4">
            <div className="label-premium text-[#2D66F6]">
              Motion placeholder
            </div>
            <h3 className="section-display text-[#081733]">
              Live Kanban workflow preview for S:O:S Sales
            </h3>
            <p className="body-large text-[#4B5563]">
              Здесь позже встанет product-анимация: входящий лид, ownership,
              движение по Kanban, следующий шаг, сделка или отказ.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Новый лид → claimed",
                "WhatsApp badge + masked phone",
                "Owner tag + next step",
                "Сделка / Отказ + mini-analytics",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#081733]/8 bg-white px-4 py-3 text-sm text-[#334155]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="storyboard-stage aspect-[16/9] rounded-[1.75rem] p-4 text-white ring-1 ring-white/10">
            <div className="grid h-full gap-3 lg:grid-cols-4">
              {[
                "Новый",
                "Контакт",
                "Квалификация",
                "Сделка",
              ].map((col, idx) => (
                <div
                  key={col}
                  className="rounded-2xl bg-white/6 p-3 ring-1 ring-white/10"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-white/70">
                    {col}
                  </div>

                  <div className="mt-3 space-y-2">
                    <div className={`rounded-xl px-3 py-2 text-sm ${
                      idx === 0
                        ? "bg-[#1E4FD1]/70"
                        : idx === 1
                        ? "bg-white/10"
                        : idx === 2
                        ? "bg-[#C88A35]/28"
                        : "bg-[#10B981]/20"
                    }`}>
                      WA • ****2145
                    </div>
                    <div className="rounded-xl bg-white/8 px-3 py-2 text-xs text-white/80">
                      Owner: Nazер
                    </div>
                    <div className="rounded-xl bg-white/8 px-3 py-2 text-xs text-white/80">
                      Next step
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-xs uppercase tracking-[0.18em] text-[#F3E0C4]">
              reserved animation area · 1600×900 · mp4/webm/lottie
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="storyboard-shell overflow-hidden p-5 lg:p-7">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="space-y-4">
          <div className="label-premium text-[#C88A35]">
            Motion placeholder
          </div>
          <h3 className="section-display text-[#081733]">
            How Nazia8Promo turns sales chaos into operating discipline
          </h3>
          <p className="body-large text-[#4B5563]">
            Здесь позже встанет hero-анимация для Nazia8Promo.kz: хаос в
            WhatsApp, роли, ownership, контроль и переход к Sales Operating
            System.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Разрозненные лиды и переписки",
              "МОП / РОП / роли и ownership",
              "Следующий шаг и дисциплина",
              "Переход в S:O:S Sales",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#081733]/8 bg-white px-4 py-3 text-sm text-[#334155]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="storyboard-stage aspect-[16/9] rounded-[1.75rem] p-4 text-white ring-1 ring-white/10">
          <div className="grid h-full gap-3 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="rounded-2xl bg-white/6 p-4 ring-1 ring-white/10">
              <div className="text-xs uppercase tracking-[0.18em] text-white/70">
                Scene 01 · chaos
              </div>
              <div className="mt-3 space-y-2">
                <div className="rounded-xl bg-white/10 px-3 py-2 text-sm">
                  WA • ****0001
                </div>
                <div className="rounded-xl bg-white/10 px-3 py-2 text-sm">
                  voice note
                </div>
                <div className="rounded-xl bg-white/10 px-3 py-2 text-sm">
                  no owner
                </div>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-2xl bg-[#1E4FD1]/22 p-4 ring-1 ring-[#2D66F6]/22">
                <div className="text-xs uppercase tracking-[0.18em] text-[#CFE0FF]">
                  Scene 02 · roles
                </div>
                <div className="mt-3 text-sm text-white/90">
                  МОП → РОП → контроль → ownership
                </div>
              </div>

              <div className="rounded-2xl bg-[#C88A35]/18 p-4 ring-1 ring-[#C88A35]/24">
                <div className="text-xs uppercase tracking-[0.18em] text-[#F3E0C4]">
                  Scene 03 · workflow
                </div>
                <div className="mt-3 text-sm text-white/90">
                  этап → следующий шаг → дисциплина исполнения
                </div>
              </div>

              <div className="rounded-2xl bg-[#10B981]/14 p-4 ring-1 ring-[#10B981]/18">
                <div className="text-xs uppercase tracking-[0.18em] text-[#D1FAE5]">
                  Scene 04 · operating system
                </div>
                <div className="mt-3 text-sm text-white/90">
                  S:O:S Sales as the working operating layer
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-xs uppercase tracking-[0.18em] text-[#F3E0C4]">
            reserved animation area · 1600×900 · mp4/webm/lottie
          </div>
        </div>
      </div>
    </section>
  );
}
