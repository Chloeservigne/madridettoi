"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Mon histoire", href: "/mon-histoire" },
  { label: "Se décider", href: "/se-decider" },
  { label: "Déménagement", href: "/demenagement" },
  { label: "Logement", href: "/logement" },
  { label: "Papiers", href: "/papiers" },
  { label: "Travailler", href: "/travailler" },
  { label: "Vivre à Madrid", href: "/vivre" },
  { label: "Communauté", href: "/communaute" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5ECD7]/90 backdrop-blur-sm border-b border-[#EDE0C8]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C1810] hover:text-[#C8614A] transition-colors flex-shrink-0"
        >
          Madrid & Toi
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-[#5a3e35] hover:text-[#C8614A] hover:bg-[#EDE0C8] rounded-full transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="/#newsletter"
            className="px-4 py-2 rounded-full bg-[#C8614A] text-white text-sm font-semibold hover:bg-[#A84D3A] transition-colors"
          >
            Rester informé(e)
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-1.5 p-1"
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-0.5 bg-[#2C1810] transition-all duration-200 origin-center ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#2C1810] transition-all duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#2C1810] transition-all duration-200 origin-center ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#F5ECD7] border-t border-[#EDE0C8] px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 px-3 text-[#5a3e35] hover:text-[#C8614A] hover:bg-[#EDE0C8] rounded-lg transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
