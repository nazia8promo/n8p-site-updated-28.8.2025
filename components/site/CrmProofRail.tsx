export function CrmProofRail() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.12fr_0.88fr]">
      <div className="premium-panel p-5 lg:p-6">
        <div className="label-premium text-[#1D4ED8]">Product proof</div>
        <div className="mt-4 rounded-[1.5rem] border border-[#0B132B]/8 bg-[#F8FAFC] p-4">
          {/* Mock CRM интерфейса */}
          <div className="flex items-center gap-2 border-b border-[#0B132B]/8 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D4A373]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#1D4ED8]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#0F766E]" />
            <div className="ml-2 text-sm text-[#5B6475]">CRM workflow mock</div>
          </div>
          <div className="mt-4 grid gap-3 lg:grid-cols-[1.02fr_0.98fr]">
            {/* Kanban колонки */}
            <div className="rounded-[1.2rem] bg-white p-3 ring-1 ring-[#0B132B]/8">
              <div className="text-xs uppercase tracking-[0.18em] text-[#1D4ED8]">Kanban</div>
              <div className="mt-3 grid gap-2">
                <div className="rounded-xl bg-[#EEF4FF] px-3 py-2 text-sm text-[#0B132B]">Новый лид</div>
                <div className="rounded-xl bg-[#EAF6F4] px-3 py-2 text-sm text-[#0B132B]">В работе</div>
                <div className="rounded-xl bg-[#F6EBDD] px-3 py-2 text-sm text-[#0B132B]">Следующий шаг</div>
              </div>
            </div>
            {/* Доп. блоки */}
            <div className="grid gap-3">
              <div className="rounded-[1.2rem] bg-white p-3 ring-1 ring-[#0B132B]/8">
                <div className="text-xs uppercase tracking-[0.18em] text-[#0F766E]">Ownership</div>
                <div className="mt-2 text-sm leading-7 text-[#334155]">Лид закреплён за менеджером и этапом.</div>
              </div>
              <div className="rounded-[1.2rem] bg-white p-3 ring-1 ring-[#0B132B]/8">
                <div className="text-xs uppercase tracking-[0.18em] text-[#9A6A33]">Role logic</div>
                <div className="mt-2 text-sm leading-7 text-[#334155]">Разделение по ролям: МОП / РОП / админ.</div>
              </div>
              <div className="rounded-[1.2rem] bg-white p-3 ring-1 ring-[#0B132B]/8">
                <div className="text-xs uppercase tracking-[0.18em] text-[#1D4ED8]">Analytics</div>
                <div className="mt-2 text-sm leading-7 text-[#334155]">Видимость по этапам, людям и рабочему процессу.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="premium-panel p-5"><div className="label-premium text-[#1D4ED8]">WhatsApp-first</div><p className="mt-3 body-regular text-[#334155]">Ближе к реальной логике продаж, чем тяжёлые перегруженные CRM.</p></div>
        <div className="premium-panel p-5"><div className="label-premium text-[#0F766E]">Kanban + workflow</div><p className="mt-3 body-regular text-[#334155]">Понятное движение лида, ownership и следующий шаг.</p></div>
        <div className="premium-panel p-5"><div className="label-premium text-[#9A6A33]">AI-assisted layer</div><p className="mt-3 body-regular text-[#334155]">Поддержка внутри процесса без unsafe обещаний “автономного AI”.</p></div>
      </div>
    </div>
  );
}
