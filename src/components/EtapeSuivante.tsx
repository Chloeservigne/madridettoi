import Link from "next/link";

interface EtapeSuivanteProps {
  label: string;
  href: string;
}

export default function EtapeSuivante({ label, href }: EtapeSuivanteProps) {
  return (
    <section className="py-10 px-6 bg-[#FBEBDD]">
      <div className="max-w-3xl mx-auto flex items-center justify-between gap-6">
        <div>
          <p className="text-[#F2A65A] font-semibold uppercase tracking-widest text-xs mb-1">
            L&apos;étape suivante
          </p>
          <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-[#33251E]">
            {label}
          </p>
        </div>
        <Link
          href={href}
          className="flex-shrink-0 px-5 py-3 rounded-full bg-[#F0552F] text-white font-semibold text-sm hover:bg-[#CC4828] transition-colors flex items-center gap-2"
        >
          Continuer →
        </Link>
      </div>
    </section>
  );
}
