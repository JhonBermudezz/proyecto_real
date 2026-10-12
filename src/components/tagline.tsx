"use client";

import { useEffect, useRef } from "react";

const lineas = [["Noventa", "minuti"], ["en", "el", "Bernabéu"], ["son", "molto", "longo."]];
const resaltadas = new Set(["Bernabéu"]);

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
    <section aria-label="Frase de Juanito" className="bg-navy py-32 lg:py-48">
      <figure className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6">
        <blockquote>
          <p ref={ref} className="max-w-4xl text-5xl font-semibold tracking-tighter sm:text-6xl lg:text-8xl">
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
    </section>
  );
}
