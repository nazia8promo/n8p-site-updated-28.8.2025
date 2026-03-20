type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  light?: boolean;
};

export function SectionTitle({ eyebrow, title, text, light = false }: Props) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow ? (
        <div className={`label-premium ${
          light ? "text-[#D4A373]" : "text-[#1D4ED8]"
        }`}>
          {eyebrow}
        </div>
      ) : null}
      <h2 className={`section-display font-semibold ${
        light ? "text-white" : "text-[#0B132B]"
      }`}>
        {title}
      </h2>
      {text ? (
        <p className={`body-large ${
          light ? "text-slate-300" : "text-slate-600"
        }`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
