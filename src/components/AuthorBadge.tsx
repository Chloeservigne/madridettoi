import Link from "next/link";

interface AuthorBadgeProps {
  date?: string;
}

export default function AuthorBadge({ date = "mars 2026" }: AuthorBadgeProps) {
  return (
    <p className="text-sm text-[#171712]/50 mt-5 flex items-center gap-1.5 flex-wrap">
      Rédigé par{" "}
      <Link
        href="/mon-histoire"
        className="text-[#d6442a] font-semibold hover:underline"
      >
        Chloé
      </Link>
      {" "}· Mis à jour en {date}
    </p>
  );
}
