import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/ssr";
import balon from "@/assets/kie/ball-night.webp";

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-deep">
      <Image src={balon} alt="" fill sizes="100vw" placeholder="blur" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-navy-deep/60" aria-hidden="true" />
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-4 sm:px-6">
        <span className="text-sm font-semibold tracking-wide text-gold uppercase">Error 404</span>
        <h1 className="text-hero max-w-2xl text-6xl font-semibold tracking-tighter sm:text-8xl">
          Fuera de juego
        </h1>
        <p className="max-w-md text-lg text-white/70">
          Esta página no existe o cambió de sitio. Vuelve al inicio para seguir con la historia blanca.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-2 text-base font-semibold text-navy transition-all duration-700 ease-spring hover:bg-gold-soft active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ArrowLeft weight="bold" className="size-4" /> Volver al inicio
        </Link>
      </div>
    </main>
  );
}
