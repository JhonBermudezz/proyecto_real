import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import parche from "@/assets/club/parche-15.svg";
import noche from "@/assets/real/bernabeu-noche-champions.webp";
import { HeroVideo } from "./hero-video";
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
      className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden bg-navy-deep"
    >
      <Image
        src={noche}
        alt=""
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        className="-z-30 object-cover"
      />
      <HeroVideo />
      <div className="absolute inset-0 -z-10 bg-navy-deep/50" aria-hidden="true" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-between px-4 pt-20 pb-8 sm:px-6 lg:pt-28">
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
              <span className="grid h-24 w-20 shrink-0 place-items-center rounded-xl bg-white">
                <Image src={parche} alt="" className="h-16 w-auto" />
              </span>
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
              En pantalla: la remontada al Manchester City
              <br />
              Semifinal de 2022 ·{" "}
              <a
                href="https://www.youtube.com/watch?v=1G4cIVAyN2U&t=135s"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-white/40 underline-offset-4 transition-colors duration-700 ease-spring hover:text-white"
              >
                vídeo de GOAT 17
              </a>
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
