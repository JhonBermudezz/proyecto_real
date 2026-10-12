import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import decimoquinta from "@/assets/real/decimoquinta.webp";
import sigloXX from "@/assets/trofeos/siglo-xx.svg";
import liga from "@/assets/trofeos/liga.svg";
import copaEuropa from "@/assets/trofeos/copa-europa.svg";
import copaRey from "@/assets/trofeos/copa-rey.svg";
import mundial from "@/assets/trofeos/mundial.svg";
import supercopaEspana from "@/assets/trofeos/supercopa-espana.svg";
import supercopaEuropa from "@/assets/trofeos/supercopa-europa.svg";
import copaUefa from "@/assets/trofeos/copa-uefa.svg";
import { Reveal } from "./reveal";
import { TrofeoIcono } from "./trofeo-icono";

/* Palmarés oficial (realmadrid.com, octubre de 2026). La barra es proporcional al título más repetido. */
const titulos = [
  { n: null, t: "Mejor Club S. XX", icono: sigloXX },
  { n: 36, t: "Ligas", icono: liga },
  { n: 15, t: "Copas de Europa", icono: copaEuropa },
  { n: 20, t: "Copas del Rey", icono: copaRey },
  { n: 9, t: "Mundiales de Clubes", icono: mundial },
  { n: 13, t: "Supercopas de España", icono: supercopaEspana },
  { n: 6, t: "Supercopas de Europa", icono: supercopaEuropa },
  { n: 2, t: "Copas de la UEFA", icono: copaUefa },
];

const MAX = 36;

export function Palmares() {
  return (
    <section id="palmares" aria-labelledby="palmares-titulo" className="bg-white py-24 text-navy lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6">
        <Reveal>
          <h2 id="palmares-titulo" className="text-4xl font-semibold tracking-tight text-royal sm:text-5xl">
            Un palmarés de leyenda
          </h2>
        </Reveal>

        <div className="grid items-stretch gap-12 lg:grid-cols-[1.6fr_1fr]">
          <Reveal className="relative min-h-72 overflow-hidden rounded-3xl lg:min-h-full">
            <Image
              src={decimoquinta}
              alt="La plantilla del Real Madrid levanta la Decimoquinta en Wembley, junio de 2024"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              placeholder="blur"
              className="object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-navy-deep/60 px-3 py-2 text-xs text-white backdrop-blur-md">
              Wembley, 1 de junio de 2024
            </span>
          </Reveal>

          <Reveal delay={150} className="palmares flex flex-col gap-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="rounded-full bg-royal px-6 py-2 text-sm font-semibold text-white">Fútbol</span>
              <a
                href="https://www.realmadrid.com/es-ES/el-club/palmares/futbol"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-royal transition-colors duration-700 ease-spring hover:text-royal-deep focus-visible:outline-2 focus-visible:outline-royal"
              >
                Ver palmarés completo <ArrowUpRight weight="bold" className="size-4" />
              </a>
            </div>

            <ul className="grid grid-cols-2 gap-x-8 gap-y-8">
              {titulos.map((t, i) => (
                <li key={t.t} className="flex flex-col gap-2">
                  <span className="flex items-end gap-2 text-royal">
                    <TrofeoIcono src={t.icono} className="size-8" />
                    {t.n !== null && (
                      <span className="text-3xl leading-none font-semibold tracking-tight text-navy">{t.n}</span>
                    )}
                  </span>
                  <span className="text-sm text-navy/70">{t.t}</span>
                  <span className="h-1 w-full overflow-hidden rounded-full bg-mist" aria-hidden="true">
                    <span
                      className="palmares-barra block h-full rounded-full bg-royal"
                      style={{
                        width: `${Math.max(8, ((t.n ?? 1) / MAX) * 100)}%`,
                        transitionDelay: `${300 + i * 80}ms`,
                      }}
                    />
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate">Datos oficiales de realmadrid.com, octubre de 2026.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
