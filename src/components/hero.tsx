import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import trofeo from "@/assets/kie/trophy.webp";
import { Reveal } from "./reveal";

const palabras = [
  { texto: "Historia.", nota: "Fundado el 6 de marzo de 1902 en Madrid", acento: false },
  { texto: "Gloria.", nota: "15 Copas de Europa, ningún club tiene más", acento: true },
  { texto: "Leyenda.", nota: "Mejor club del siglo XX según la FIFA", acento: false },
];

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-titulo"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-navy-deep"
    >
      <video
        className="absolute inset-0 -z-20 size-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        poster="/video/hero-poster.webp"
        aria-hidden="true"
      >
        <source src="/video/hero.webm" type="video/webm" />
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <Image
        src="/video/hero-poster.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-navy-deep/50" aria-hidden="true" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-4 pt-32 pb-8 sm:px-6 lg:pt-40">
        <h1 id="hero-titulo" className="grid gap-6 lg:grid-cols-3 lg:gap-4">
          {palabras.map((p, i) => (
            <Reveal as="span" key={p.texto} delay={i * 120} className="flex flex-col gap-3">
              <span
                className={`block text-6xl font-semibold tracking-tighter sm:text-7xl xl:text-8xl ${p.acento ? "text-gold lg:text-center" : i === 2 ? "text-hero lg:text-right" : "text-hero"}`}
              >
                {p.texto}
              </span>
              <span
                className={`block max-w-56 text-sm font-normal text-white/70 ${p.acento ? "lg:mx-auto lg:text-center" : i === 2 ? "lg:ml-auto lg:text-right" : ""}`}
              >
                {p.nota}
              </span>
            </Reveal>
          ))}
        </h1>

        <div className="mt-16 grid items-end gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={400}>
            <a
              href="#champions"
              className="group flex w-full max-w-80 items-center gap-4 rounded-3xl border border-white/15 bg-white/10 p-3 backdrop-blur-xl transition-all duration-700 ease-spring hover:-translate-y-1 hover:bg-white/15 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-gold"
            >
              <Image
                src={trofeo}
                alt="Copa de Europa iluminada con confeti dorado"
                className="h-24 w-20 rounded-xl object-cover"
                sizes="80px"
              />
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium tracking-wide text-white/70 uppercase">
                  Palmarés europeo
                </span>
                <span className="flex items-baseline gap-2">
                  <span className="text-5xl font-semibold tracking-tighter text-gold">15</span>
                  <span className="text-sm text-white">Copas de Europa</span>
                </span>
                <span className="text-xs text-white/70">36 Ligas · 20 Copas del Rey</span>
              </div>
            </a>
          </Reveal>

          <Reveal delay={500} className="hidden lg:block">
            <p className="text-center text-sm text-white/70">
              Temporada 2026/27
              <br />
              Entrenador: José Mourinho
            </p>
          </Reveal>

          <Reveal delay={600} className="sm:justify-self-end">
            <a
              href="#champions"
              className="group inline-flex items-center gap-3 border-b-2 border-gold pb-2 text-xl font-semibold tracking-tight text-gold uppercase transition-all duration-700 ease-spring hover:gap-4 hover:text-gold-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Revive las 15 finales
              <ArrowUpRight
                weight="bold"
                className="size-6 transition-transform duration-700 ease-spring group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
