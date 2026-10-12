"use client";

import Image from "next/image";
import { useState } from "react";
import { CaretLeft, CaretRight, Trophy } from "@phosphor-icons/react/ssr";
import { finales } from "@/data/champions";
import { Reveal } from "./reveal";

export function Champions() {
  const [actual, setActual] = useState(finales.length - 1);
  const final = finales[actual];
  const ir = (dir: 1 | -1) => setActual((i) => (i + dir + finales.length) % finales.length);

  return (
    <section id="champions" aria-labelledby="champions-titulo" className="overflow-hidden bg-white py-24 text-navy lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Reveal>
            <div className="flex size-40 flex-col items-center justify-center gap-1 rounded-full bg-mist text-center">
              <Trophy weight="duotone" className="size-6 text-gold-deep" />
              <span className="text-4xl font-semibold tracking-tighter">15</span>
              <span className="max-w-24 text-xs text-slate">Copas de Europa en las vitrinas</span>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex max-w-md gap-6 rounded-3xl bg-mist p-6">
              <span className="text-4xl font-semibold tracking-tighter">#{String(final.numero).padStart(2, "0")}</span>
              <div className="flex flex-col gap-2">
                <p className="text-lg font-semibold">{final.titulo}</p>
                <p className="text-sm text-slate">
                  {final.ciudad} · {final.anio}. Real Madrid {final.resultado} {final.rival}.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative flex flex-col items-center gap-8 sm:min-h-[40rem] sm:justify-center">
          <h2
            id="champions-titulo"
            className="pointer-events-none flex w-full flex-col text-6xl font-semibold tracking-tighter select-none sm:text-8xl lg:text-9xl"
          >
            <span className="text-silver">Reyes de</span>
            <span className="self-end">Europa</span>
          </h2>

          <div className="relative aspect-[3/4] w-60 sm:absolute sm:top-1/2 sm:left-1/2 sm:w-80 sm:-translate-x-1/2 sm:-translate-y-1/2">
            {finales.map((f, i) => (
              <figure
                key={f.numero}
                aria-hidden={i !== actual}
                className={`absolute inset-0 overflow-hidden rounded-[2.5rem] bg-navy shadow-2xl shadow-navy/30 transition-all duration-700 ease-spring ${i === actual ? "rotate-6 opacity-100" : "scale-90 rotate-0 opacity-0"}`}
              >
                <Image
                  src={f.foto}
                  alt={`Final de ${f.anio} en ${f.ciudad}`}
                  fill
                  sizes="320px"
                  placeholder="blur"
                  className="object-cover"
                />
                <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-navy/50 px-4 py-3 text-white backdrop-blur-md">
                  <span className="block text-sm font-semibold">
                    {f.numero}ª Copa de Europa
                  </span>
                  <span className="block text-xs text-white/70">
                    {f.ciudad} · {f.anio}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => ir(-1)}
            aria-label="Final anterior"
            className="grid size-12 place-items-center rounded-full border border-navy/20 transition-all duration-700 ease-spring hover:bg-mist active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-royal"
          >
            <CaretLeft weight="bold" className="size-5" />
          </button>
          <div className="hidden items-center gap-2 sm:flex" aria-hidden="true">
            {finales.map((f, i) => (
              <span
                key={f.numero}
                className={`h-2 rounded-full transition-all duration-700 ease-spring ${i === actual ? "w-8 bg-navy" : "w-2 bg-silver"}`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold sm:hidden">
            {final.numero} / {finales.length}
          </span>
          <button
            type="button"
            onClick={() => ir(1)}
            aria-label="Final siguiente"
            className="grid size-12 place-items-center rounded-full bg-navy text-white transition-all duration-700 ease-spring hover:bg-royal active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
          >
            <CaretRight weight="bold" className="size-5" />
          </button>
        </div>

        <article
          aria-live="polite"
          className="grid gap-8 rounded-3xl bg-mist p-6 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-16"
        >
          <div className="flex flex-col gap-2">
            <span className="text-8xl font-semibold tracking-tighter text-royal">{final.numero}ª</span>
            <span className="text-base font-semibold">
              Real Madrid {final.resultado} {final.rival}
            </span>
            <span className="text-sm text-slate">
              {final.ciudad} · {final.fecha}
            </span>
          </div>
          <div className="flex max-w-2xl flex-col gap-4">
            <h3 className="text-3xl font-semibold tracking-tight">{final.titulo}</h3>
            <p className="text-lg font-medium text-gold-deep">{final.subtitulo}</p>
            {final.texto.map((t) => (
              <p key={t} className="text-base text-navy/70">
                {t}
              </p>
            ))}
          </div>
        </article>

        <nav aria-label="Elegir final por año">
          <ul className="no-scrollbar flex gap-2 overflow-x-auto pb-2">
            {finales.map((f, i) => (
              <li key={f.numero}>
                <button
                  type="button"
                  onClick={() => setActual(i)}
                  aria-current={i === actual ? "true" : undefined}
                  className="rounded-full border border-navy/15 px-3 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-700 ease-spring hover:border-navy hover:bg-mist active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-royal aria-[current]:border-navy aria-[current]:bg-navy aria-[current]:text-white"
                >
                  {f.anio}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
