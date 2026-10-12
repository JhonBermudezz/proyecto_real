"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import noche from "@/assets/real/bernabeu-noche-champions.webp";
import { Reveal } from "./reveal";

const lineas = [["Noventa", "minuti"], ["en", "el", "Bernabéu"], ["son", "molto", "longo."]];
const resaltadas = new Set(["Bernabéu"]);

const remontadas = [
  {
    rival: "PSG",
    resultado: "3–1",
    ronda: "Octavos 2022",
    detalle: "Perdía la eliminatoria y Benzema marcó tres goles en 17 minutos (3–2 global).",
  },
  {
    rival: "Chelsea",
    resultado: "2–3",
    ronda: "Cuartos 2022",
    detalle: "Caía 0–3 en el Bernabéu: Rodrygo forzó la prórroga en el 80 y Benzema la cerró de cabeza (5–4 global).",
  },
  {
    rival: "Manchester City",
    resultado: "3–1",
    ronda: "Semifinal 2022",
    detalle: "Dos goles de Rodrygo en el 90 y el 91 y penalti de Benzema en la prórroga (6–5 global).",
  },
];

/* Cada palabra pasa de apagada a encendida al cruzar la línea del 60% del viewport. */
export function Tagline() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const palabras = ref.current?.querySelectorAll<HTMLSpanElement>("[data-word]");
    if (!palabras) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          // Encendida si cruzó la línea; apagada solo si vuelve a quedar por debajo
          if (entry.isIntersecting) el.dataset.on = "true";
          else if (entry.boundingClientRect.top > 0) el.dataset.on = "false";
        }
      },
      { rootMargin: "0px 0px -40% 0px" },
    );
    palabras.forEach((p) => observer.observe(p));
    return () => observer.disconnect();
  }, []);

  return (
    <section aria-label="Frase de Juanito y noches de remontada" className="relative isolate overflow-hidden bg-navy py-32 lg:py-40">
      <Image src={noche} alt="" fill sizes="100vw" placeholder="blur" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-navy/85" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr]">
        <figure className="flex flex-col gap-8">
          <blockquote>
            <p ref={ref} className="text-5xl font-semibold tracking-tighter sm:text-6xl xl:text-7xl">
              {lineas.map((linea, i) => (
                <span key={i} className="block">
                  {linea.map((w) => (
                    <span
                      key={w}
                      data-word
                      data-on="false"
                      className={`inline-block pr-[0.25em] transition-colors duration-700 ease-spring data-[on=false]:text-white/25 ${resaltadas.has(w) ? "data-[on=true]:text-gold" : "data-[on=true]:text-white"}`}
                    >
                      {w}
                    </span>
                  ))}
                </span>
              ))}
            </p>
          </blockquote>
          <figcaption className="flex items-center gap-4 text-sm text-white/70">
            <span className="h-px w-12 bg-gold" aria-hidden="true" />
            Juanito, antes de una remontada europea en 1986
          </figcaption>
        </figure>

        <div className="flex flex-col gap-4">
          <Reveal>
            <h2 className="text-sm font-semibold tracking-wide text-gold uppercase">Noches de remontada en 2022</h2>
          </Reveal>
          <ol className="flex flex-col gap-4">
            {remontadas.map((r, i) => (
              <Reveal as="li" key={r.rival} delay={i * 120}>
                <article className="flex gap-4 rounded-2xl border border-white/15 bg-navy-deep/60 p-4 backdrop-blur-xl transition-all duration-700 ease-spring hover:-translate-y-1 hover:border-gold/50">
                  <span className="text-3xl font-semibold tracking-tighter text-gold tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold">
                      Real Madrid {r.resultado} {r.rival}
                    </h3>
                    <p className="text-xs tracking-wide text-white/50 uppercase">{r.ronda} · Bernabéu</p>
                    <p className="text-sm text-white/70">{r.detalle}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
