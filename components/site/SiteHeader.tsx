"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteNavigation } from "@/lib/site/navigation";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#081733]/10 bg-white/86 backdrop-blur-md">
      <div className="container-premium flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="shrink-0">
          <div className="flex items-center gap-[6px] leading-none">
            <span className="text-[1.55rem] font-extrabold tracking-[-0.05em] text-[#081733]">
              Nazia
            </span>

            <Image
              src="/brand/nazia8-mark.svg"
              alt="Nazia8Promo mark"
              width={22}
              height={30}
              className="h-[30px] w-auto"
              priority
            />

            <span className="text-[1.55rem] font-extrabold tracking-[-0.05em] text-[#081733]">
              Promo
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-7">
          {siteNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#334155] transition hover:text-[#1fb6a6]"
            >
              {item.label}
            </Link>
          ))}

          <Link href="/contact" className="button-premium-dark">
            Связаться
          </Link>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-full border border-[#081733]/10 bg-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-[#081733]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-[72px] border-b border-[#081733]/10 bg-white shadow-lg md:hidden">
            <nav className="flex flex-col gap-3 p-4">
              {siteNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-[#334155] hover:text-[#1fb6a6]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="mt-2 button-premium-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Связаться
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}