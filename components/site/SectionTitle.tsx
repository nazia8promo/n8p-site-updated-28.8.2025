type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function SectionTitle({ eyebrow, title, text }: Props) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#1D4ED8]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-[#0B132B] md:text-5xl">
        {title}
      </h2>
      {text ? <p className="text-lg leading-8 text-slate-600">{text}</p> : null}
    </div>
  );
}
