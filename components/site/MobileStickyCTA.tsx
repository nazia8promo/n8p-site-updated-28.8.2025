import Link from "next/link";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#0B132B]/10 bg-white/95 p-2.5 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-7xl gap-2.5">
        <a
          href="https://wa.me/77478089359"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-full bg-[#0B132B] px-4 py-3 text-center text-sm font-medium text-white"
        >
          WhatsApp
        </a>

        <Link
          href="/contact"
          className="flex-1 rounded-full bg-[#EEF4FF] px-4 py-3 text-center text-sm font-medium text-[#1D4ED8]"
        >
          Демо
        </Link>
      </div>
    </div>
  );
}