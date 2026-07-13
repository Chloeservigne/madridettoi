import Image from "next/image";

interface LogoProps {
  variant?: "ink" | "cream";
  height?: number;
  className?: string;
}

export default function Logo({ variant = "ink", height = 24, className = "" }: LogoProps) {
  const src = variant === "cream" ? "/images/logo-cream.svg" : "/images/logo-ink.svg";
  const width = Math.round((height * 299) / 56);
  return (
    <Image
      src={src}
      alt="Madrid & Toi"
      width={width}
      height={height}
      unoptimized
      className={className}
    />
  );
}
