"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { searchIndex } from "@/data/searchIndex";

interface SearchBoxProps {
  variant?: "nav" | "hero";
  placeholder?: string;
}

export default function SearchBox({ variant = "nav", placeholder }: SearchBoxProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const isHero = variant === "hero";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const q = query.trim().toLowerCase();
  const results =
    q.length > 0
      ? searchIndex
          .filter(
            (item) =>
              item.title.toLowerCase().includes(q) ||
              item.category.toLowerCase().includes(q) ||
              item.keywords?.some((k) => k.toLowerCase().includes(q))
          )
          .slice(0, 6)
      : [];

  function goToGoogleSearch() {
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(`site:madrid-et-toi.com ${query}`)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function handleSelect(href: string) {
    setOpen(false);
    setQuery("");
    router.push(href);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!q) return;
    if (results.length > 0) {
      handleSelect(results[0].href);
    } else {
      goToGoogleSearch();
    }
  }

  return (
    <div ref={wrapRef} className="relative w-full">
      <form
        onSubmit={handleSubmit}
        className={
          isHero
            ? "flex items-center gap-3 bg-white border border-[#af3722]/50 rounded-full p-1.5 pl-5 shadow-[0_16px_40px_-26px_rgba(36,24,19,0.4)]"
            : "flex items-center gap-2.5 bg-white border border-[#af3722]/45 rounded-full h-[46px] px-4"
        }
      >
        <svg
          width={isHero ? "20" : "18"}
          height={isHero ? "20" : "18"}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#171712"
          strokeWidth="2.3"
          strokeLinecap="round"
          className="flex-shrink-0"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.5" y2="16.5" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => query && setOpen(true)}
          placeholder={placeholder ?? "Rechercher : NIE, coloc, autónomo, quartier…"}
          aria-label="Rechercher sur le site"
          className={
            isHero
              ? "flex-1 min-w-0 outline-none text-base text-[#171712] placeholder:text-[#171712]/70 bg-transparent"
              : "flex-1 min-w-0 bg-transparent outline-none text-sm text-[#171712] placeholder:text-[#171712]/70"
          }
        />
        {isHero && (
          <button
            type="submit"
            className="flex-shrink-0 font-[family-name:var(--font-body)] font-bold text-white bg-[#d6442a] rounded-full px-6 py-3 hover:bg-[#af3722] transition-colors"
          >
            Chercher
          </button>
        )}
      </form>

      {open && q.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-[#f2f0e9] shadow-[0_20px_46px_-24px_rgba(36,24,19,0.35)] overflow-hidden z-40 text-left">
          {results.length > 0 ? (
            results.map((r) => (
              <button
                key={r.href}
                type="button"
                onClick={() => handleSelect(r.href)}
                className="w-full text-left px-4 py-3 hover:bg-[#fbfaf6] transition-colors flex items-center justify-between gap-3 border-b border-[#f2f0e9] last:border-0 cursor-pointer"
              >
                <span>
                  <span className="block font-[family-name:var(--font-body)] font-semibold text-sm text-[#171712]">
                    {r.title}
                  </span>
                  <span className="block font-[family-name:var(--font-body)] font-medium text-[11px] uppercase tracking-wide text-[#d6442a] mt-0.5">
                    {r.category}
                  </span>
                </span>
                <span className="text-[#d6442a] flex-shrink-0">→</span>
              </button>
            ))
          ) : (
            <button
              type="button"
              onClick={goToGoogleSearch}
              className="w-full text-left px-4 py-3 hover:bg-[#fbfaf6] transition-colors text-sm text-[#171712] cursor-pointer"
            >
              Aucun guide trouvé pour «&nbsp;{query}&nbsp;» — chercher sur tout le site →
            </button>
          )}
        </div>
      )}
    </div>
  );
}
