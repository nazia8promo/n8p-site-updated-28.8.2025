import Link from "next/link";

type ButtonItem = {
  label: string;
  href: string;
};

type Props = {
  primary: ButtonItem;
  secondary?: ButtonItem;
};

export function CTAButtons({ primary, secondary }: Props) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Link
        href={primary.href}
        className="rounded-full bg-[#0B132B] px-6 py-3 text-center text-white transition hover:bg-[#111C3D]"
      >
        {primary.label}
      </Link>

      {secondary ? (
        <Link
          href={secondary.href}
          className="rounded-full border border-[#D4A373]/40 bg-[#F6EBDD] px-6 py-3 text-center text-[#9A6A33] transition hover:bg-[#F0E0C9]"
        >
          {secondary.label}
        </Link>
      ) : null}
    </div>
  );
}
