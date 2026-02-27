"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const guideLinks = [
  { label: "Se décider", href: "/se-decider" },
  { label: "Déménagement", href: "/demenagement" },
  { label: "Logement", href: "/logement" },
  { label: "Papiers", href: "/papiers" },
  { label: "Travailler", href: "/travailler" },
  { label: "Vivre à Madrid", href: "/vivre" },
  { label: "Communauté", href: "/communaute" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const guidesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (guidesRef.current && !guidesRef.current.contains(e.target as Node)) {
        setGuidesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5ECD7]/90 backdrop-blur-sm border-b border-[#EDE0C8]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C1810] hover:text-[#C8614A] transition-colors flex-shrink-0"
        >
          Madrid & Toi
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            href="/mon-histoire"
            className="px-3 py-1.5 text-sm text-[#5a3e35] hover:text-[#C8614A] hover:bg-[#EDE0C8] rounded-full transition-colors whitespace-nowrap"
          >
            Mon histoire
          </Link>

          {/* Guides dropdown */}
          <div ref={guidesRef} className="relative">
            <button
              onClick={() => setGuidesOpen(!guidesOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-[#5a3e35] hover:text-[#C8614A] hover:bg-[#EDE0C8] rounded-full transition-colors"
            >
              Guides
              <span
                className={`text-xs transition-transform duration-200 inline-block ${
                  guidesOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {guidesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#F5ECD7] rounded-2xl shadow-xl p-2 flex flex-col w-48">
                {guideLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setGuidesOpen(false)}
                    className="px-3 py-2 text-sm text-[#5a3e35] hover:text-[#C8614A] hover:bg-[#EDE0C8] rounded-xl transition-colors whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
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
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-1"
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-0.5 bg-[#2C1810] transition-all duration-200 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#2C1810] transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[#2C1810] transition-all duration-200 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F5ECD7] border-t border-[#EDE0C8] px-6 py-4 flex flex-col gap-1">
          <Link
            href="/mon-histoire"
            onClick={() => setMenuOpen(false)}
            className="py-2 px-3 text-[#5a3e35] hover:text-[#C8614A] hover:bg-[#EDE0C8] rounded-lg transition-colors text-sm font-medium"
          >
            Mon histoire
          </Link>
          <p className="px-3 pt-3 pb-1 text-xs uppercase tracking-widest text-[#5a3e35]/50 font-semibold">
            Guides
          </p>
          {guideLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
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
