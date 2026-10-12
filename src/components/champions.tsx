"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/ssr";
import escudo from "@/assets/club/escudo.png";
import copaEuropa from "@/assets/trofeos/copa-europa.svg";
import { finales } from "@/data/champions";
import { Reveal } from "./reveal";
import { TrofeoIcono } from "./trofeo-icono";

export function Champions() {
  const [actual, setActual] = useState(finales.length - 1);
  const final = finales[actual];
  const rail = useRef<HTMLOListElement>(null);
  const ir = (dir: 1 | -1) => setActual((i) => (i + dir + finales.length) % finales.length);

  // Mantiene visible en la línea de tiempo el año seleccionado
  useEffect(() => {
    const el = rail.current?.children[actual] as HTMLElement | undefined;
    const pista = rail.current;
    if (!el || !pista) return;
    pista.scrollTo({ left: el.offsetLeft - pista.clientWidth / 2 + el.clientWidth / 2, behavior: "smooth" });
  }, [actual]);

  const [marcador, extra] = final.resultado.split(" (");

  return (
    <section id="champions" aria-labelledby="champions-titulo" className="overflow-hidden bg-navy-deep py-24 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6">
        <Reveal className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold tracking-wide text-gold uppercase">Copa de Europa</span>
            <h2 id="champions-titulo" className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Las 15 finales
              <br /> que nos hicieron reyes
            </h2>
          </div>
          <p className="max-w-md text-lg text-white/70 lg:justify-self-end">
            De París 1956 a Wembley 2024. Elige un año para revivir cada final.
          </p>
        </Reveal>

        <Reveal>
          <ol
            ref={rail}
            aria-label="Finales por año"
            className="no-scrollbar flex gap-2 overflow-x-auto border-y border-white/10 py-4"
          >
            {finales.map((f, i) => (
              <li key={f.numero} className="min-w-16 flex-1">
                <button
                  type="button"
                  onClick={() => setActual(i)}
                  aria-current={i === actual ? "true" : undefined}
                  aria-label={`${f.numero}ª Copa de Europa, ${f.ciudad} ${f.anio}`}
                  className="group flex w-full flex-col items-center gap-2 rounded-2xl py-3 text-white/40 transition-all duration-700 ease-spring hover:bg-white/5 hover:text-white/80 focus-visible:outline-2 focus-visible:outline-gold aria-[current]:bg-white/10 aria-[current]:text-gold"
                >
                  <TrofeoIcono src={copaEuropa} className="h-8 w-7 transition-transform duration-700 ease-spring group-aria-[current]:scale-125" />
                  <span className="text-sm font-semibold tabular-nums">{f.anio}</span>
                </button>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-navy lg:aspect-auto lg:min-h-[32rem]">
            {finales.map((f, i) => (
              <Image
                key={f.numero}
                src={f.foto}
                alt={`Final de ${f.anio} en ${f.ciudad}`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                placeholder="blur"
                aria-hidden={i !== actual}
                className={`object-cover transition-all duration-1000 ease-spring ${i === actual ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
              />
            ))}
            <span className="absolute top-4 left-4 rounded-full bg-gold px-3 py-2 text-sm font-semibold text-navy">
              {final.numero}ª Copa de Europa
            </span>
          </div>

          <article aria-live="polite" className="flex flex-col gap-6 rounded-3xl bg-navy p-6 sm:p-10">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-2xl bg-navy-deep p-4">
              <div className="flex items-center gap-3">
                <Image src={escudo} alt="" className="h-10 w-auto" />
                <span className="text-base font-semibold">Real Madrid</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl font-semibold tracking-tighter text-gold tabular-nums">{marcador}</span>
                {extra && <span className="text-xs text-white/50">({extra}</span>}
              </div>
              <span className="text-right text-base font-semibold">{final.rival}</span>
            </div>

            <p className="text-sm tracking-wide text-white/50 uppercase">
              {final.ciudad} · {final.fecha}
            </p>
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-semibold tracking-tight">{final.titulo}</h3>
              <p className="text-lg font-medium text-gold">{final.subtitulo}</p>
            </div>
            {final.texto.map((t) => (
              <p key={t} className="text-base text-white/70">
                {t}
              </p>
            ))}

            <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-6">
              <span className="text-sm text-white/50 tabular-nums">
                {final.numero} de {finales.length}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => ir(-1)}
                  aria-label="Final anterior"
                  className="grid size-12 place-items-center rounded-full border border-white/20 transition-all duration-700 ease-spring hover:bg-white/10 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-gold"
                >
                  <CaretLeft weight="bold" className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => ir(1)}
                  aria-label="Final siguiente"
                  className="grid size-12 place-items-center rounded-full bg-gold text-navy transition-all duration-700 ease-spring hover:bg-gold-soft active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <CaretRight weight="bold" className="size-5" />
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
