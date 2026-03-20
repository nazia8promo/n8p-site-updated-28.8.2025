"use client";

import Link from "next/link";
import { useState } from "react";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#081733]/10 bg-white/80 backdrop-blur-md">
      <div className="container-premium flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#081733]">Nazia8Promo</span>
          <span className="hidden text-sm text-[#C88A35] md:inline-block">| Academy</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-[#334155] transition hover:text-[#1D4ED8]"
          >
            Главная
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-[#334155] transition hover:text-[#1D4ED8]"
          >
            Об академии
          </Link>
          <Link
            href="/rop"
            className="text-sm font-medium text-[#334155] transition hover:text-[#1D4ED8]"
          >
            РОП
          </Link>
          <Link
            href="/mop"
            className="text-sm font-medium text-[#334155] transition hover:text-[#1D4ED8]"
          >
            МОП
          </Link>
          <Link
            href="/crm"
            className="text-sm font-medium text-[#334155] transition hover:text-[#1D4ED8]"
          >
            S:O:S CRM
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-[#1D4ED8] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#1E4FD1]"
          >
            Связаться
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-16 bg-white border-b border-[#081733]/10 shadow-lg md:hidden">
            <nav className="flex flex-col p-4 gap-4">
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-[#334155] hover:text-[#1D4ED8]"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-sm font-medium text-[#334155] hover:text-[#1D4ED8]"
                onClick={() => setIsMenuOpen(false)}
              >
                Об академии
              </Link>
              <Link
                href="/rop"
                className="px-4 py-2 text-sm font-medium text-[#334155] hover:text-[#1D4ED8]"
                onClick={() => setIsMenuOpen(false)}
              >
                РОП
              </Link>
              <Link
                href="/mop"
                className="px-4 py-2 text-sm font-medium text-[#334155] hover:text-[#1D4ED8]"
                onClick={() => setIsMenuOpen(false)}
              >
                МОП
              </Link>
              <Link
                href="/crm"
                className="px-4 py-2 text-sm font-medium text-[#334155] hover:text-[#1D4ED8]"
                onClick={() => setIsMenuOpen(false)}
              >
                S:O:S CRM
              </Link>
              <Link
                href="/contact"
                className="mx-4 rounded-full bg-[#1D4ED8] px-5 py-2 text-center text-sm font-medium text-white transition hover:bg-[#1E4FD1]"
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
