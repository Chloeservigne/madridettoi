"use client";

import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Pour l'instant on simule — à connecter à une vraie liste (Resend, Mailchimp, etc.)
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ton@email.fr"
        required
        disabled={status === "loading" || status === "success"}
        className="flex-1 px-4 py-3 rounded-full border border-stone-200 bg-white text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#c4622d] focus:border-transparent disabled:opacity-50 font-[family-name:var(--font-inter)]"
      />
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="px-6 py-3 rounded-full bg-[#c4622d] text-white font-semibold hover:bg-[#a8521f] transition-colors disabled:opacity-60 whitespace-nowrap font-[family-name:var(--font-inter)] cursor-pointer"
      >
        {status === "loading"
          ? "..."
          : status === "success"
          ? "C'est noté !"
          : "Je m'inscris"}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-sm mt-1">Une erreur s&apos;est produite, réessaie.</p>
      )}
    </form>
  );
}
