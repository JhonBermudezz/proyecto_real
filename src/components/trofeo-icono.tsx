import type { StaticImageData } from "next/image";

/* Pinta un icono SVG con el color del texto (currentColor) usando una máscara CSS. */
export function TrofeoIcono({ src, className = "" }: { src: StaticImageData; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block bg-current [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] ${className}`}
      style={{ maskImage: `url(${src.src})`, WebkitMaskImage: `url(${src.src})` }}
    />
  );
}
