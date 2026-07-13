import Image from "next/image";

interface IllustrationSlotProps {
  src: string;
  alt: string;
  className?: string;
}

export default function IllustrationSlot({ src, alt, className = "" }: IllustrationSlotProps) {
  return (
    <div className={`relative bg-[#f2f0e9] ${className}`}>
      <Image src={src} alt={alt} fill unoptimized className="object-contain p-3" />
    </div>
  );
}
