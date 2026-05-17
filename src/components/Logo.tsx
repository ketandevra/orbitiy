import Image from "next/image";

const sizeClasses = {
  xs: "h-6",
  sm: "h-8",
  md: "h-10",
  lg: "h-14",
  xl: "h-20",
} as const;

export type LogoSize = keyof typeof sizeClasses;

export function Logo({
  className = "",
  size = "md",
  priority = false,
}: {
  className?: string;
  size?: LogoSize;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo.png"
      alt="Orbitiy"
      width={1254}
      height={1254}
      priority={priority}
      className={`w-auto object-contain ${sizeClasses[size]} ${className}`}
    />
  );
}
