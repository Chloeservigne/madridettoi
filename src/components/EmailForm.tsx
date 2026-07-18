"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "coming-soon">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    track("newsletter_signup_attempt", { page: window.location.pathname });
    setStatus("coming-soon");
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
        disabled={status === "coming-soon"}
        className="flex-1 px-4 py-3 rounded-full border border-[#f2f0e9] bg-white text-[#171712] placeholder:text-[#171712]/40 focus:outline-none focus:ring-2 focus:ring-[#d6442a] focus:border-transparent disabled:opacity-50 font-[family-name:var(--font-body)]"
      />
      <button
        type="submit"
        disabled={status === "coming-soon"}
        className="px-6 py-3 rounded-full bg-[#d6442a] text-white font-semibold hover:bg-[#af3722] transition-colors disabled:opacity-60 whitespace-nowrap font-[family-name:var(--font-body)] cursor-pointer"
      >
        {status === "coming-soon" ? "C'est noté !" : "Je m'inscris"}
      </button>
      {status === "coming-soon" && (
        <p className="text-[#171712]/70 text-sm mt-1 sm:basis-full">
          Oups, la newsletter n&apos;est pas encore branchée — merci de ton intérêt, j&apos;y travaille ! 🛠️
        </p>
      )}
    </form>
  );
}
