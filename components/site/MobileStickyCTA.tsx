import Link from "next/link";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#0B132B]/10 bg-white/92 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-7xl gap-3">
        <Link
          href="/contact"
          className="flex-1 rounded-full bg-[#0B132B] px-4 py-3 text-center text-sm font-medium text-white"
        >
          Оставить заявку
        </Link>
        <Link
          href="/crm"
          className="flex-1 rounded-full bg-[#F6EBDD] px-4 py-3 text-center text-sm font-medium text-[#9A6A33]"
        >
          CRM
        </Link>
      </div>
    </div>
  );
}
