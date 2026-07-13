interface PhotoPlaceholderProps {
  label: string;
  className?: string;
}

export default function PhotoPlaceholder({ label, className = "" }: PhotoPlaceholderProps) {
  return (
    <div
      className={`relative flex items-center justify-center bg-[repeating-linear-gradient(135deg,#FBEBDD_0px,#FBEBDD_10px,#FFFBF5_10px,#FFFBF5_20px)] ${className}`}
    >
      <span className="px-3 py-1 rounded-full bg-white/80 text-[#7C6A5C] text-[11px] font-medium tracking-wide uppercase">
        Photo — {label}
      </span>
    </div>
  );
}
