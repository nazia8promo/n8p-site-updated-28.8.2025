export function HomeMotionPlaceholder() {
  return (
    <section className="storyboard-shell home-motion-zone overflow-hidden p-5 lg:p-7">
      <div className="grid gap-6 lg:grid-cols-[0.38fr_0.62fr] lg:items-start">
        <div className="relative z-10 space-y-4">
          <div className="label-premium text-[#C88A35]">
            Future motion block
          </div>

          <h3 className="section-display text-[#081733]">
            Здесь будет анимация: как Nazia8Promo переводит продажи из хаоса в operating system.
          </h3>

          <p className="body-large text-[#4B5563]">
            Не CRM-first, а логика работы: входящий лид, роли, ownership,
            следующий шаг, контроль РОП и закрепление в S:O:S Sales.
          </p>

          <div className="grid gap-3">
            {[
              "WhatsApp-хаос и разрозненные лиды",
              "МОП / РОП / роли и ownership",
              "Следующий шаг и дисциплина работы",
              "Переход в S:O:S Sales как operating layer",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#081733]/8 bg-white px-4 py-3 text-sm text-[#334155]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="rounded-[1.35rem] border border-[#081733]/8 bg-white px-4 py-4">
            <div className="text-xs uppercase tracking-[0.18em] text-[#7B8393]">
              brief for animator
            </div>
            <div className="mt-3 body-regular text-[#334155]">
              Сцены: chaos → role assignment → workflow discipline → S:O:S Sales
            </div>
          </div>
        </div>

        <div className="storyboard-stage relative z-10 aspect-[16/9] rounded-[2rem] p-5 text-white ring-1 ring-white/10 lg:p-6">
          <div className="grid h-full gap-4 lg:grid-cols-[0.44fr_0.56fr]">
            <div className="space-y-3 rounded-[1.6rem] bg-white/6 p-4 ring-1 ring-white/10">
              <div className="text-xs uppercase tracking-[0.18em] text-white/70">
                Scene 01 · chaos
              </div>
              <div className="motion-stage-card">WA • ****0001 • нет owner</div>
              <div className="motion-stage-card">voice note • потерянный лид</div>
              <div className="motion-stage-card">личная переписка • нет next step</div>

              <div className="mt-4 rounded-2xl border border-dashed border-white/20 px-4 py-4 text-sm text-white/60">
                здесь может пульсировать входящий лид / чат / голосовое
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-[1.6rem] bg-[#1E4FD1]/22 p-4 ring-1 ring-[#2D66F6]/22">
                <div className="text-xs uppercase tracking-[0.18em] text-[#CFE0FF]">
                  Scene 02 · roles
                </div>
                <div className="mt-3 motion-mini-card">МОП → работа с лидом</div>
                <div className="mt-2 motion-mini-card">РОП → ownership и контроль</div>
              </div>

              <div className="rounded-[1.6rem] bg-[#C88A35]/18 p-4 ring-1 ring-[#C88A35]/24">
                <div className="text-xs uppercase tracking-[0.18em] text-[#F3E0C4]">
                  Scene 03 · workflow
                </div>
                <div className="mt-3 motion-mini-card">
                  этап → следующий шаг → дисциплина
                </div>
              </div>

              <div className="rounded-[1.6rem] bg-[#10B981]/14 p-4 ring-1 ring-[#10B981]/18">
                <div className="text-xs uppercase tracking-[0.18em] text-[#D1FAE5]">
                  Scene 04 · operating layer
                </div>
                <div className="mt-3 motion-mini-card">
                  S:O:S Sales as the working system
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-dashed border-white/16 px-4 py-4 text-sm text-white/60">
                reserved animation area for final motion composition
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <div className="motion-chip bg-white/8 text-white/80 ring-1 ring-white/10">
              1600×900
            </div>
            <div className="motion-chip bg-white/8 text-white/80 ring-1 ring-white/10">
              mp4 / webm / lottie
            </div>
            <div className="motion-chip bg-[#C88A35]/16 text-[#F3E0C4] ring-1 ring-[#C88A35]/24">
              reserved animation area
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}