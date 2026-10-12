"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, SoccerBall } from "@phosphor-icons/react/ssr";
import { goleadores } from "@/data/goleadores";
import { Reveal } from "./reveal";

const promedio = (g: number, p: number) => (g / p).toFixed(2).replace(".", ",");

export function Goleadores() {
  const pista = useRef<HTMLUListElement>(null);

  const mover = (dir: 1 | -1) => {
    const el = pista.current;
    if (!el) return;
    const tarjeta = el.querySelector("li");
    el.scrollBy({ left: dir * ((tarjeta?.clientWidth ?? 400) + 16), behavior: "smooth" });
  };

  return (
    <section id="goleadores" aria-labelledby="goleadores-titulo" className="overflow-hidden bg-navy-deep py-24 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6">
        <Reveal className="flex items-end gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm text-white/70">Leyendas</span>
            <h2 id="goleadores-titulo" className="text-3xl font-semibold tracking-tight uppercase sm:text-4xl">
              Máximos goleadores
            </h2>
          </div>
          <span className="mb-4 hidden h-px flex-1 bg-white/20 md:block" aria-hidden="true" />
          <div className="ml-auto flex items-center gap-2">
            <span className="mr-2 hidden text-base text-white/70 sm:inline">Desliza para ver todos</span>
            <button
              type="button"
              onClick={() => mover(-1)}
              aria-label="Goleador anterior"
              className="grid size-12 place-items-center rounded-full border border-white/20 transition-all duration-700 ease-spring hover:bg-white/10 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-gold"
            >
              <ArrowLeft weight="bold" className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => mover(1)}
              aria-label="Siguiente goleador"
              className="grid size-12 place-items-center rounded-full bg-gold text-navy transition-all duration-700 ease-spring hover:bg-gold-soft active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <ArrowRight weight="bold" className="size-5" />
            </button>
          </div>
        </Reveal>
      </div>

      <ul
        ref={pista}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 sm:px-6 xl:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
      >
        {goleadores.map((g, i) => (
          <Reveal
            as="li"
            key={g.apellido}
            delay={i * 100}
            className="w-[85vw] shrink-0 snap-start sm:w-[36rem]"
          >
            <article className="group relative isolate flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-3xl bg-navy p-6 sm:aspect-[16/11]">
              <div className="absolute inset-0 -z-20 overflow-hidden sm:left-1/3">
                <Image
                  src={g.foto}
                  alt={`${g.nombre} ${g.apellido} con la camiseta del Real Madrid`}
                  fill
                  sizes="(min-width: 640px) 384px, 85vw"
                  placeholder="blur"
                  className="object-cover object-top transition-transform duration-1000 ease-spring group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 -z-10 bg-navy-deep/40 sm:bg-navy-deep/20" aria-hidden="true" />

              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-2">
                  <span className="grid size-12 place-items-center rounded-2xl bg-white/10 text-lg font-semibold backdrop-blur-md">
                    {g.posicion}
                  </span>
                  <span className="grid size-12 place-items-center rounded-2xl bg-white/10 backdrop-blur-md">
                    <SoccerBall weight="duotone" className="size-5 text-gold" />
                  </span>
                </div>
                <a
                  href={g.wiki}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-navy-deep/60 px-3 py-2 text-sm font-semibold text-gold uppercase backdrop-blur-md transition-all duration-700 ease-spring hover:bg-gold hover:text-navy focus-visible:outline-2 focus-visible:outline-gold"
                >
                  Ver perfil <ArrowUpRight weight="bold" className="size-4" />
                  <span className="sr-only">de {g.nombre} {g.apellido}</span>
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-4xl font-semibold tracking-tighter [text-shadow:0_2px_16px_rgb(10_23_48/0.6)] sm:text-5xl">
                  {g.nombre}
                  <br />
                  {g.apellido}
                </h3>
                <dl className="grid grid-cols-3 gap-2 rounded-2xl border border-white/15 bg-navy-deep/70 p-4 backdrop-blur-xl">
                  <div className="flex flex-col">
                    <dt className="order-2 text-xs text-white/70">Goles</dt>
                    <dd className="text-3xl font-semibold tracking-tighter text-gold">{g.goles}</dd>
                  </div>
                  <div className="flex flex-col">
                    <dt className="order-2 text-xs text-white/70">Partidos</dt>
                    <dd className="text-3xl font-semibold tracking-tighter">{g.partidos}</dd>
                  </div>
                  <div className="flex flex-col">
                    <dt className="order-2 text-xs text-white/70">Por partido</dt>
                    <dd className="text-3xl font-semibold tracking-tighter">{promedio(g.goles, g.partidos)}</dd>
                  </div>
                  <div className="col-span-3 border-t border-white/10 pt-2 text-xs text-white/50">
                    <dt className="sr-only">Etapa</dt>
                    <dd>Real Madrid CF · {g.etapa}</dd>
                  </div>
                </dl>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>

      <div className="mx-auto mt-12 flex max-w-7xl items-center gap-6 px-4 sm:px-6">
        <span className="h-px flex-1 bg-white/20" aria-hidden="true" />
        <p className="text-xl font-semibold tracking-tight uppercase">Gol a gol se escribe la leyenda</p>
      </div>
    </section>
  );
}
