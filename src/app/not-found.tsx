import Link from "next/link";
import Nav from "@/components/Nav";

export default function NotFound() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-body)]">
      <Nav />

      <section className="pt-32 md:pt-40 pb-24 px-6 min-h-screen flex items-center bg-gradient-to-b from-[#FFFBF5] to-[#FBEBDD]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-[family-name:var(--font-heading)] text-8xl font-bold text-[#F0552F]/20 mb-2">
            404
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-bold text-[#33251E] mb-6">
            Cette page s&apos;est{" "}
            <span className="not-italic font-bold text-[#F0552F]">perdue en chemin</span>
          </h1>
          <p className="text-lg text-[#33251E] leading-relaxed mb-12">
            Comme un premier appart à Madrid qu&apos;on ne retrouve plus sur
            Idealista — elle a disparu. Retourne à l&apos;accueil, on a mieux à
            t&apos;offrir.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 rounded-full bg-[#F0552F] text-white font-semibold hover:bg-[#CC4828] transition-colors"
            >
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/logement"
              className="px-6 py-3 rounded-full border border-[#33251E]/20 text-[#33251E] font-semibold hover:border-[#F0552F] hover:text-[#F0552F] transition-colors"
            >
              Trouver un logement
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
