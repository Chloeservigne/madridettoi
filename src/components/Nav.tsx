"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import PhotoPlaceholder from "./PhotoPlaceholder";
import SearchBox from "./SearchBox";

type MenuKey = "logement" | "paperasses" | "travail" | "vie";

interface MenuDef {
  key: MenuKey;
  label: string;
  href: string;
  feature: string;
  featureHref: string;
  links: { t: string; d: string; href: string }[];
}

const menuDefs: MenuDef[] = [
  {
    key: "logement",
    label: "Logement",
    href: "/logement",
    feature: "Trouver un logement à Madrid sans se faire avoir",
    featureHref: "/logement/appartement",
    links: [
      { t: "Où chercher", d: "Trouver et signer sans se faire avoir", href: "/logement/appartement" },
      { t: "Les quartiers", d: "Choisir selon ton budget et ton style de vie", href: "/logement/quartiers" },
      { t: "Prix au m²", d: "Loyers et achat par quartier", href: "/logement/prix" },
      { t: "Colocation", d: "Trouver des colocs de confiance", href: "/logement/colocation" },
    ],
  },
  {
    key: "paperasses",
    label: "Paperasses",
    href: "/papiers",
    feature: "Le NIE, le padrón et la sécu dans le bon ordre",
    featureHref: "/papiers/nie",
    links: [
      { t: "Obtenir son NIE", d: "Étape par étape", href: "/papiers/nie" },
      { t: "L'empadronamiento", d: "S'inscrire à la mairie", href: "/papiers/padron" },
      { t: "La sécurité sociale", d: "Tes droits, et quand", href: "/papiers/secu" },
      { t: "Ouvrir un compte", d: "Les banques accueillantes", href: "/papiers/compte-bancaire" },
    ],
  },
  {
    key: "travail",
    label: "Travail",
    href: "/travailler",
    feature: "Salarié, autónomo ou télétravail : que choisir ?",
    featureHref: "/travailler/emploi",
    links: [
      { t: "Trouver un emploi", d: "Les secteurs qui recrutent", href: "/travailler/emploi" },
      { t: "Devenir autónomo", d: "Cotisations et tarif réduit", href: "/travailler/freelance" },
      { t: "Télétravailler d'ici", d: "Statut, fiscalité, VIE", href: "/travailler/remote" },
      { t: "Entreprises françaises", d: "Qui recrute sur place", href: "/travailler/entreprises-francaises" },
    ],
  },
  {
    key: "vie",
    label: "Vie quotidienne",
    href: "/vivre",
    feature: "Banque, santé, transports : s'installer pour de vrai",
    featureHref: "/vivre/sante",
    links: [
      { t: "Se déplacer", d: "Métro, Abono, BiciMAD", href: "/vivre/transports" },
      { t: "Santé au quotidien", d: "Médecin, pharmacie, urgences", href: "/vivre/sante" },
      { t: "Faire ses courses", d: "Dépenser moins", href: "/vivre/courses" },
      { t: "Sortir à Madrid", d: "Musées, parcs, vie nocturne", href: "/vivre/sortir" },
    ],
  },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState<MenuKey | null>(null);
  const subNavRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
    setGuidesOpen(null);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const active = menuDefs.find((m) => m.key === guidesOpen) ?? null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFBF5]/90 backdrop-blur-sm border-b border-[#FBEBDD]">
      <div className="max-w-5xl mx-auto px-6 h-[74px] flex items-center gap-6">
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <span className="w-10 h-10 rounded-full flex-shrink-0 bg-[radial-gradient(circle_at_50%_40%,#FFC24B,#F0552F)] shadow-[0_0_0_5px_rgba(240,85,47,0.09)]" />
          <span>
            <span className="block font-[family-name:var(--font-heading)] font-extrabold text-xl tracking-tight text-[#33251E] leading-none">
              Madrid &amp; Toi
            </span>
            <span className="block font-[family-name:var(--font-heading)] font-semibold text-[9px] tracking-[0.16em] uppercase text-[#F0552F] mt-0.5">
              De Madrid al cielo
            </span>
          </span>
        </Link>

        <div className="hidden md:block flex-1 max-w-[420px]">
          <SearchBox variant="nav" />
        </div>

        <a
          href="/#newsletter"
          className="flex-shrink-0 ml-auto md:ml-0 px-5 py-2.5 rounded-full bg-[#F0552F] text-white text-sm font-semibold font-[family-name:var(--font-heading)] hover:bg-[#CC4828] transition-colors whitespace-nowrap"
        >
          S&apos;abonner
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1 flex-shrink-0"
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-[#33251E] transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#33251E] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#33251E] transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Desktop sub-nav with mega menu */}
      <div
        ref={subNavRef}
        onMouseLeave={() => setGuidesOpen(null)}
        className="hidden md:block relative border-t border-[#FBEBDD] bg-[#FBEBDD]/40"
      >
        <div className="max-w-5xl mx-auto px-6 h-[50px] flex items-center gap-1">
          <Link
            href="/#commencer"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-heading)] font-bold text-sm text-[#F0552F] px-3.5 py-2 rounded-full hover:bg-[#F0552F]/10 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#F0552F] inline-block" />
            Par où commencer
          </Link>
          {menuDefs.map((m) => (
            <button
              key={m.key}
              onMouseEnter={() => setGuidesOpen(m.key)}
              className={`inline-flex items-center gap-1 font-[family-name:var(--font-heading)] font-semibold text-sm px-3.5 py-2 rounded-full transition-colors cursor-pointer ${
                guidesOpen === m.key ? "text-[#F0552F] bg-white" : isActive(m.href) ? "text-[#F0552F]" : "text-[#33251E]"
              }`}
            >
              {m.label}
              <span className={`text-xs transition-transform duration-150 ${guidesOpen === m.key ? "rotate-180" : ""}`}>⌄</span>
            </button>
          ))}
          <Link href="/mon-histoire" className="ml-auto font-[family-name:var(--font-heading)] font-semibold text-sm text-[#7C6A5C] px-1 py-2 hover:text-[#F0552F] transition-colors">
            Mon histoire
          </Link>
        </div>

        {active && (
          <div className="absolute top-full left-0 right-0 z-30">
            <div className="max-w-5xl mx-auto px-6">
              <div className="bg-white rounded-b-[20px] border border-t-0 border-[#FBEBDD] shadow-[0_34px_60px_-34px_rgba(36,24,19,0.45)] p-7 grid grid-cols-[1.5fr_1fr] gap-8 max-w-[760px]">
                <div>
                  <p className="font-[family-name:var(--font-heading)] font-bold text-[11px] tracking-[0.12em] uppercase text-[#F0552F] mb-3.5">
                    {active.label}
                  </p>
                  {active.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block px-3.5 py-2.5 rounded-xl hover:bg-[#FFFBF5] transition-colors"
                    >
                      <span className="block font-[family-name:var(--font-heading)] font-bold text-[15px] text-[#33251E] mb-0.5">{l.t}</span>
                      <span className="block font-[family-name:var(--font-body)] text-[13px] text-[#7C6A5C]">{l.d}</span>
                    </Link>
                  ))}
                </div>
                <Link
                  href={active.featureHref}
                  className="block rounded-2xl bg-[#FFFBF5] p-3.5 border border-[#F2A65A]/20 hover:-translate-y-0.5 transition-transform"
                >
                  <PhotoPlaceholder label={active.label} className="h-[104px] rounded-xl mb-3" />
                  <p className="font-[family-name:var(--font-heading)] font-bold text-[10px] tracking-[0.1em] uppercase text-[#F0552F] mb-1.5">
                    À lire en premier
                  </p>
                  <p className="font-[family-name:var(--font-heading)] font-bold text-base text-[#33251E] leading-snug mb-3">
                    {active.feature}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-[family-name:var(--font-heading)] font-bold text-xs tracking-wide uppercase text-[#F0552F]">
                    Ouvrir le guide<span>→</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-[#FFFBF5] border-t border-[#FBEBDD] px-6 py-4 flex flex-col gap-1 max-h-[calc(100vh-74px)] overflow-y-auto">
          <Link
            href="/mon-histoire"
            className={`py-2 px-3 rounded-lg transition-colors text-sm font-medium ${isActive("/mon-histoire") ? "text-[#F0552F] bg-[#FBEBDD]" : "text-[#33251E]"}`}
          >
            Mon histoire
          </Link>
          {menuDefs.map((m) => (
            <div key={m.key} className="mt-2">
              <p className="px-3 pt-2 pb-1 text-xs uppercase tracking-widest text-[#7C6A5C] font-semibold">{m.label}</p>
              {m.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`block py-2 px-3 rounded-lg transition-colors text-sm font-medium ${isActive(l.href) ? "text-[#F0552F] bg-[#FBEBDD]" : "text-[#33251E]"}`}
                >
                  {l.t}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
