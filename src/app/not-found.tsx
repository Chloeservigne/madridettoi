import Link from "next/link";
import Nav from "@/components/Nav";

export default function NotFound() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-body)]">
      <Nav />

      <section className="pt-32 md:pt-40 pb-24 px-6 min-h-screen flex items-center bg-gradient-to-b from-[#fbfaf6] to-[#f2f0e9]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-[family-name:var(--font-body)] text-8xl font-bold text-[#d6442a]/20 mb-2">
            404
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-extrabold text-[#171712] mb-6">
            Cette page s&apos;est{" "}
            <span className="not-italic font-bold text-[#d6442a]">perdue en chemin</span>
          </h1>
          <p className="text-lg text-[#171712] leading-relaxed mb-12">
            Comme un premier appart à Madrid qu&apos;on ne retrouve plus sur
            Idealista — elle a disparu. Retourne à l&apos;accueil, on a mieux à
            t&apos;offrir.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 rounded-full bg-[#d6442a] text-white font-semibold hover:bg-[#af3722] transition-colors"
            >
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/logement"
              className="px-6 py-3 rounded-full border border-[#171712]/20 text-[#171712] font-semibold hover:border-[#d6442a] hover:text-[#d6442a] transition-colors"
            >
              Trouver un logement
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
