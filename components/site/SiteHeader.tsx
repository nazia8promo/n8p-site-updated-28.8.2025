"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteNavigation } from "@/lib/site/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#FAF7F2]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.16em] text-[#0B132B]"
          onClick={() => setOpen(false)}
        >
          NAZIA 8 PROMO
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {siteNavigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 text-sm transition ${
                  active
                    ? "text-[#0B132B]"
                    : "text-slate-600 hover:text-[#0B132B]"
                }`}
              >
                {item.label}
                {active ? (
                  <span className="absolute inset-x-0 -bottom-[6px] h-px bg-[#D4A373]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full bg-[#0B132B] px-5 py-2 text-sm text-white transition hover:bg-[#111C3D]"
          >
            Оставить заявку
          </Link>
        </div>

        <button
          type="button"
          aria-label="Открыть меню"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-[#0B132B] md:hidden"
        >
          Меню
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
            {siteNavigation.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm transition ${
                    active
                      ? "bg-[#F6EBDD] text-[#0B132B]"
                      : "text-slate-700 hover:bg-[#F8FAFC]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#0B132B] px-5 py-3 text-center text-sm text-white"
            >
              Оставить заявку
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
