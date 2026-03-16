import Link from "next/link";

interface EtapeSuivanteProps {
  label: string;
  href: string;
}

export default function EtapeSuivante({ label, href }: EtapeSuivanteProps) {
  return (
    <section className="py-10 px-6 bg-[#EDE0C8]">
      <div className="max-w-3xl mx-auto flex items-center justify-between gap-6">
        <div>
          <p className="text-[#7A8C5E] font-semibold uppercase tracking-widest text-xs mb-1">
            L&apos;étape suivante
          </p>
          <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#2C1810]">
            {label}
          </p>
        </div>
        <Link
          href={href}
          className="flex-shrink-0 px-5 py-3 rounded-full bg-[#C8614A] text-white font-semibold text-sm hover:bg-[#A84D3A] transition-colors flex items-center gap-2"
        >
          Continuer →
        </Link>
      </div>
    </section>
  );
}
