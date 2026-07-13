import Link from "next/link";

interface AuthorBadgeProps {
  date?: string;
}

export default function AuthorBadge({ date = "mars 2026" }: AuthorBadgeProps) {
  return (
    <p className="text-sm text-[#33251E]/50 mt-5 flex items-center gap-1.5 flex-wrap">
      Rédigé par{" "}
      <Link
        href="/mon-histoire"
        className="text-[#F0552F] font-semibold hover:underline"
      >
        Chloé
      </Link>
      {" "}· Mis à jour en {date}
    </p>
  );
}
