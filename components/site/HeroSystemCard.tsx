export function HeroSystemCard() {
  return (
    <div className="ml-auto w-full max-w-[720px]">
      <div className="premium-dark overflow-hidden rounded-[2rem] p-5 text-white ring-1 ring-white/10 shadow-[0_18px_46px_rgba(8,23,51,0.16)] lg:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-white/50">
              Sales system
            </div>
            <div className="mt-3 text-[2rem] font-extrabold tracking-[-0.05em] text-white">
              Контроль. Порядок. Рост.
            </div>
          </div>

          <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-[#F3E0C4] ring-1 ring-white/10">
            внедрение под ключ
          </div>
        </div>

        <div className="mt-5 rounded-[1.6rem] bg-white/6 p-5 ring-1 ring-white/10">
          <div className="text-xs uppercase tracking-[0.2em] text-[#F3E0C4]">
            Что получает бизнес
          </div>
          <div className="mt-3 text-[1.7rem] font-bold tracking-[-0.04em] text-white">
            CRM + workflow + контроль команды
          </div>
          <p className="mt-3 text-[0.98rem] leading-8 text-white/72">
            Вся работа с лидами, этапами, ответственными и переписками
            собирается в одной системе без хаоса в WhatsApp.
          </p>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-[1.6rem] bg-[#2D66F6]/12 p-5 ring-1 ring-[#2D66F6]/18">
            <div className="text-xs uppercase tracking-[0.2em] text-[#CFE0FF]">
              CRM layer
            </div>
            <div className="mt-3 text-[1.45rem] font-bold tracking-[-0.04em] text-white">
              S:O:S CRM
            </div>
            <p className="mt-3 text-[0.96rem] leading-8 text-white/72">
              WhatsApp-first CRM: Kanban, ownership, контроль и практичная аналитика.
            </p>
          </div>

          <div className="rounded-[1.6rem] bg-[#C88A35]/12 p-5 ring-1 ring-[#C88A35]/18">
            <div className="text-xs uppercase tracking-[0.2em] text-[#F3E0C4]">
              Implementation
            </div>
            <div className="mt-3 text-[1.45rem] font-bold tracking-[-0.04em] text-white">
              Nazia8Promo
            </div>
            <p className="mt-3 text-[0.96rem] leading-8 text-white/72">
              Настройка, запуск, обучение команды и закрепление процесса в ежедневной работе.
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-[1.6rem] bg-white/6 p-5 ring-1 ring-white/10">
          <div className="text-xs uppercase tracking-[0.2em] text-white/50">
            Inside the system
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {[
              "лиды в одном месте",
              "контроль менеджеров",
              "этапы и ownership",
              "AI-assisted workflow",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full bg-white/8 px-4 py-2.5 text-sm text-white/84 ring-1 ring-white/10"
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