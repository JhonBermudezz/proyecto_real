import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { fichajes, plantilla, PLANTILLA_OFICIAL } from "@/data/plantilla";
import { Reveal } from "./reveal";

const nuevos = new Set(fichajes.map((f) => f.dorsal));

export function Plantilla() {
  return (
    <section id="plantilla" aria-labelledby="plantilla-titulo" className="bg-mist py-24 text-navy lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold tracking-wide text-royal uppercase">Primer equipo</span>
            <h2 id="plantilla-titulo" className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Plantilla 2026/27
            </h2>
            <p className="text-base text-slate">
              Entrenador: <span className="font-semibold text-navy">José Mourinho</span>
            </p>
          </div>
          <a
            href={PLANTILLA_OFICIAL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-max items-center gap-2 rounded-full bg-navy px-3 py-2 text-base font-semibold text-white transition-all duration-700 ease-spring hover:bg-royal active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
          >
            Ver plantilla oficial
            <ArrowUpRight weight="bold" className="size-4 transition-transform duration-700 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plantilla.map((l, i) => (
            <Reveal key={l.linea} delay={i * 100} className="rounded-3xl bg-white p-6">
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-slate uppercase">{l.linea}</h3>
              <ul className="flex flex-col">
                {l.jugadores.map(([dorsal, nombre]) => (
                  <li key={dorsal} className="flex items-center gap-4 border-b border-navy/5 py-2 last:border-0">
                    <span className="w-8 text-lg font-semibold text-royal tabular-nums">{dorsal}</span>
                    <span className="flex-1 text-base">{nombre}</span>
                    {nuevos.has(dorsal) && (
                      <span className="rounded-full bg-gold px-2 py-0.5 text-xs font-semibold text-navy">Nuevo</span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
