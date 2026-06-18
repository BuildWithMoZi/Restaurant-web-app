import Image from "next/image";
import { assetPath } from "@/lib/asset-path";

type BlendMode = "normal" | "multiply" | "screen";

type HangingPlantImageProps = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  blend?: BlendMode;
  /** Anchor foliage to top or bottom of the image box */
  anchor?: "top" | "bottom";
};

export function HangingPlantImage({
  src,
  alt = "",
  width,
  height,
  className = "",
  priority = false,
  blend = "normal",
  anchor = "top",
}: HangingPlantImageProps) {
  const blendClass =
    blend === "screen"
      ? "mix-blend-screen"
      : blend === "multiply"
        ? "mix-blend-multiply"
        : "";

  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <Image
        src={assetPath(src)}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`h-auto w-full object-contain ${anchor === "bottom" ? "object-bottom" : "object-top"} ${blendClass}`}
        sizes="(max-width: 640px) 140px, (max-width: 1024px) 200px, 280px"
        quality={88}
      />
    </div>
  );
}
