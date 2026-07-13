"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import IllustrationSlot from "./IllustrationSlot";
import Logo from "./Logo";
import SearchBox from "./SearchBox";

type MenuKey = "logement" | "paperasses" | "travail" | "vie";

interface MenuDef {
  key: MenuKey;
  label: string;
  href: string;
  feature: string;
  featureHref: string;
  img: string;
  links: { t: string; d: string; href: string }[];
}

const menuDefs: MenuDef[] = [
  {
    key: "logement",
    label: "Logement",
    href: "/logement",
    feature: "Trouver un logement à Madrid sans se faire avoir",
    featureHref: "/logement/appartement",
    img: "/images/illus-logement.svg",
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
    img: "/images/illus-paperasses.svg",
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
    img: "/images/illus-travail.svg",
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
    img: "/images/illus-vie-quotidienne.svg",
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fbfaf6]/90 backdrop-blur-sm border-b border-[#f2f0e9]">
      <div className="max-w-5xl mx-auto px-6 h-[74px] flex items-center gap-6">
        <Link href="/" className="flex-shrink-0">
          <Logo variant="ink" height={26} />
        </Link>

        <div className="hidden md:block flex-1 max-w-[420px]">
          <SearchBox variant="nav" />
        </div>

        <a
          href="/#newsletter"
          className="flex-shrink-0 ml-auto md:ml-0 px-5 py-2.5 rounded-full bg-[#1fa971] text-white text-sm font-semibold font-[family-name:var(--font-body)] hover:bg-[#178a5d] transition-colors whitespace-nowrap"
        >
          S&apos;abonner
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1 flex-shrink-0"
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-[#171712] transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#171712] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#171712] transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Desktop sub-nav with mega menu */}
      <div
        ref={subNavRef}
        onMouseLeave={() => setGuidesOpen(null)}
        className="hidden md:block relative border-t border-[#f2f0e9] bg-[#f2f0e9]/40"
      >
        <div className="max-w-5xl mx-auto px-6 h-[50px] flex items-center gap-1">
          <Link
            href="/#commencer"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-body)] font-bold text-sm text-[#1fa971] px-3.5 py-2 rounded-full hover:bg-[#1fa971]/10 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1fa971] inline-block" />
            Par où commencer
          </Link>
          {menuDefs.map((m) => (
            <button
              key={m.key}
              onMouseEnter={() => setGuidesOpen(m.key)}
              className={`inline-flex items-center gap-1 font-[family-name:var(--font-body)] font-semibold text-sm px-3.5 py-2 rounded-full transition-colors cursor-pointer ${
                guidesOpen === m.key ? "text-[#1fa971] bg-white" : isActive(m.href) ? "text-[#1fa971]" : "text-[#171712]"
              }`}
            >
              {m.label}
              <span className={`text-xs transition-transform duration-150 ${guidesOpen === m.key ? "rotate-180" : ""}`}>⌄</span>
            </button>
          ))}
          <Link href="/mon-histoire" className="ml-auto font-[family-name:var(--font-body)] font-semibold text-sm text-[#171712] px-1 py-2 hover:text-[#1fa971] transition-colors">
            Mon histoire
          </Link>
        </div>

        {active && (
          <div className="absolute top-full left-0 right-0 z-30">
            <div className="max-w-5xl mx-auto px-6">
              <div className="bg-white rounded-b-[20px] border border-t-0 border-[#f2f0e9] shadow-[0_34px_60px_-34px_rgba(36,24,19,0.45)] p-7 grid grid-cols-[1.5fr_1fr] gap-8 max-w-[760px]">
                <div>
                  <p className="font-[family-name:var(--font-body)] font-bold text-[11px] tracking-[0.12em] uppercase text-[#1fa971] mb-3.5">
                    {active.label}
                  </p>
                  {active.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="block px-3.5 py-2.5 rounded-xl hover:bg-[#fbfaf6] transition-colors"
                    >
                      <span className="block font-[family-name:var(--font-body)] font-bold text-[15px] text-[#171712] mb-0.5">{l.t}</span>
                      <span className="block font-[family-name:var(--font-body)] text-[13px] text-[#171712]">{l.d}</span>
                    </Link>
                  ))}
                </div>
                <Link
                  href={active.featureHref}
                  className="block rounded-2xl bg-[#fbfaf6] p-3.5 border border-[#178a5d]/20 hover:-translate-y-0.5 transition-transform"
                >
                  <IllustrationSlot src={active.img} alt={`Illustration ${active.label}`} className="h-[104px] rounded-xl mb-3" />
                  <p className="font-[family-name:var(--font-body)] font-bold text-[10px] tracking-[0.1em] uppercase text-[#1fa971] mb-1.5">
                    À lire en premier
                  </p>
                  <p className="font-[family-name:var(--font-body)] font-bold text-base text-[#171712] leading-snug mb-3">
                    {active.feature}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-[family-name:var(--font-body)] font-bold text-xs tracking-wide uppercase text-[#1fa971]">
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
        <div ref={mobileMenuRef} className="md:hidden bg-[#fbfaf6] border-t border-[#f2f0e9] px-6 py-4 flex flex-col gap-1 max-h-[calc(100vh-74px)] overflow-y-auto">
          <Link
            href="/mon-histoire"
            className={`py-2 px-3 rounded-lg transition-colors text-sm font-medium ${isActive("/mon-histoire") ? "text-[#1fa971] bg-[#f2f0e9]" : "text-[#171712]"}`}
          >
            Mon histoire
          </Link>
          {menuDefs.map((m) => (
            <div key={m.key} className="mt-2">
              <p className="px-3 pt-2 pb-1 text-xs uppercase tracking-widest text-[#171712] font-semibold">{m.label}</p>
              {m.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`block py-2 px-3 rounded-lg transition-colors text-sm font-medium ${isActive(l.href) ? "text-[#1fa971] bg-[#f2f0e9]" : "text-[#171712]"}`}
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
