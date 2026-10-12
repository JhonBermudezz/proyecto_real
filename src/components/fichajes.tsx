import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { canterano, fichajes, type Fichaje } from "@/data/plantilla";
import { Reveal } from "./reveal";

function Tarjeta({ f }: { f: Fichaje }) {
  return (
    <a
      href={f.perfil}
      target="_blank"
      rel="noreferrer"
      className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-3xl bg-royal-deep p-2 transition-all duration-700 ease-spring hover:-translate-y-1 hover:bg-royal active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
    >
      <span
        className="absolute top-4 left-6 -z-20 text-9xl font-bold tracking-tighter text-white/10 transition-colors duration-700 ease-spring group-hover:text-white/20"
        aria-hidden="true"
      >
        {f.dorsal}
      </span>
      <Image
        src={f.foto}
        alt={`${f.nombre} con la camiseta del Real Madrid`}
        fill
        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
        className="-z-10 object-contain object-bottom transition-transform duration-1000 ease-spring group-hover:scale-105"
      />
      <div className="flex items-end justify-between gap-4 rounded-2xl border border-white/15 bg-navy-deep/60 p-4 backdrop-blur-xl">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold tracking-tight">{f.nombre}</h3>
          <p className="text-sm text-white/70">
            {f.posicion} · Llega del {f.procedencia}
          </p>
          <p className="text-xs text-white/50">{f.nacimiento}</p>
        </div>
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gold text-navy transition-transform duration-700 ease-spring group-hover:rotate-45">
          <ArrowUpRight weight="bold" className="size-4" />
        </span>
      </div>
    </a>
  );
}

export function Fichajes() {
  return (
    <section id="fichajes" aria-labelledby="fichajes-titulo" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6">
        <Reveal className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold tracking-wide text-gold uppercase">Temporada 2026/27</span>
            <h2 id="fichajes-titulo" className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Seis caras nuevas
              <br /> para el Bernabéu
            </h2>
          </div>
          <p className="max-w-md text-lg text-white/70 lg:justify-self-end">
            Los fichajes del verano para la segunda etapa de José Mourinho, con datos de la web
            oficial del club. Toca una tarjeta para ver su ficha completa.
          </p>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fichajes.map((f, i) => (
            <Reveal as="li" key={f.nombre} delay={(i % 3) * 100}>
              <Tarjeta f={f} />
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <article className="grid overflow-hidden rounded-3xl bg-navy-deep sm:grid-cols-[minmax(0,20rem)_1fr]">
            <div className="relative h-80 bg-royal-deep sm:h-auto sm:min-h-80">
              <span
                className="absolute top-4 left-6 text-9xl font-bold tracking-tighter text-white/10"
                aria-hidden="true"
              >
                {canterano.dorsal}
              </span>
              <Image
                src={canterano.foto}
                alt={`${canterano.nombre} con la camiseta del Real Madrid`}
                fill
                sizes="320px"
                className="object-contain object-bottom"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
              <span className="w-max rounded-full bg-gold px-3 py-1 text-xs font-semibold tracking-wide text-navy uppercase">
                Canterano · La Fábrica
              </span>
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{canterano.nombre}</h3>
              <p className="text-base text-white/70">
                {canterano.posicion} · Dorsal {canterano.dorsal} · {canterano.nacimiento}
              </p>
              <p className="max-w-xl text-base text-white/70">
                Formado en la cantera del Real Madrid, campeón de la Youth League con el Juvenil A y de
                la Eurocopa sub 19. Sube al primer equipo para la temporada 2026/27.
              </p>
              <a
                href={canterano.perfil}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-max items-center gap-2 rounded-full bg-gold px-3 py-2 text-base font-semibold text-navy transition-all duration-700 ease-spring hover:bg-gold-soft active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Ver ficha oficial
                <ArrowUpRight weight="bold" className="size-4 transition-transform duration-700 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
