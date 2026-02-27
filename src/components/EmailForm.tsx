"use client";

import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
        className="flex-1 px-4 py-3 rounded-full border border-[#EDE0C8] bg-white text-[#2C1810] placeholder:text-[#2C1810]/40 focus:outline-none focus:ring-2 focus:ring-[#C8614A] focus:border-transparent disabled:opacity-50 font-[family-name:var(--font-dm-sans)]"
      />
      <button
        type="submit"
        disabled={status === "loading" || status === "success"}
        className="px-6 py-3 rounded-full bg-[#2C1810] text-[#F5ECD7] font-semibold hover:bg-[#1a0e09] transition-colors disabled:opacity-60 whitespace-nowrap font-[family-name:var(--font-dm-sans)] cursor-pointer"
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
