import Link from "next/link";
import Nav from "@/components/Nav";

export default function NotFound() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-dm-sans)]">
      <Nav />

      <section className="pt-32 pb-24 px-6 min-h-screen flex items-center bg-gradient-to-b from-[#F5ECD7] to-[#EDE0C8]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-[family-name:var(--font-playfair)] text-8xl font-bold text-[#C8614A]/20 mb-2">
            404
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl font-bold text-[#2C1810] mb-6">
            Cette page s&apos;est{" "}
            <span className="italic text-[#C8614A]">perdue en chemin</span>
          </h1>
          <p className="text-lg text-[#5a3e35] leading-relaxed mb-12">
            Comme un premier appart à Madrid qu&apos;on ne retrouve plus sur
            Idealista — elle a disparu. Retourne à l&apos;accueil, on a mieux à
            t&apos;offrir.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-3 rounded-full bg-[#C8614A] text-white font-semibold hover:bg-[#A84D3A] transition-colors"
            >
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/logement"
              className="px-6 py-3 rounded-full border border-[#2C1810]/20 text-[#2C1810] font-semibold hover:border-[#C8614A] hover:text-[#C8614A] transition-colors"
            >
              Trouver un logement
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
