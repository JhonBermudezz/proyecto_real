import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import historiaImg from "@/assets/club/historia-real-img.webp";
import camiseta from "@/assets/real/camiseta.webp";
import quinta from "@/assets/champions/quinta.webp";
import estadio from "@/assets/real/bernabeu-interior.webp";
import decimoquinta from "@/assets/real/decimoquinta.webp";
import sigloXX from "@/assets/trofeos/siglo-xx.svg";
import { Reveal } from "./reveal";
import { TrofeoIcono } from "./trofeo-icono";

function HitoFoto({
  src,
  alt,
  anio,
  texto,
  posicion = "object-center",
  sizes,
}: {
  src: StaticImageData;
  alt: string;
  anio: string;
  texto: string;
  posicion?: string;
  sizes: string;
}) {
  return (
    <article className="group relative isolate flex h-full flex-col justify-end overflow-hidden rounded-3xl bg-navy p-4 text-white">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        placeholder="blur"
        className={`-z-20 object-cover transition-transform duration-1000 ease-spring group-hover:scale-105 ${posicion}`}
      />
      <div className="absolute inset-0 -z-10 bg-navy-deep/30" aria-hidden="true" />
      <div className="rounded-2xl border border-white/15 bg-navy-deep/60 p-4 backdrop-blur-xl">
        <span className="text-2xl font-semibold tracking-tight text-gold">{anio}</span>
        <p className="text-sm text-white/80">{texto}</p>
      </div>
    </article>
  );
}

export function Historia() {
  return (
    <section id="historia" aria-labelledby="historia-titulo" className="bg-mist py-24 text-navy lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6">
        <Reveal className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold tracking-wide text-royal uppercase">Historia</span>
            <h2 id="historia-titulo" className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Más de un siglo convirtiendo
              <br className="hidden sm:block" /> la victoria en costumbre
            </h2>
          </div>
          <div className="flex flex-col items-start gap-6 lg:justify-self-end">
            <p className="max-w-lg text-lg text-navy/70">
              Fundado el 6 de marzo de 1902, el Real Madrid es uno de los clubes más importantes del
              mundo. Sus éxitos, celebrados en La Cibeles, han forjado un palmarés que nadie ha
              igualado en Europa.
            </p>
            <a
              href="https://www.realmadrid.com/es-ES/el-club/historia"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-navy px-3 py-2 text-base font-semibold text-white transition-all duration-700 ease-spring hover:bg-royal active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
            >
              Leer la historia completa
              <ArrowUpRight
                weight="bold"
                className="size-4 transition-transform duration-700 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>

        <ul className="grid auto-rows-[13rem] grid-cols-2 gap-4 sm:auto-rows-[15rem] lg:grid-cols-4">
          <Reveal as="li" className="col-span-2 row-span-2">
            <article className="group relative isolate flex h-full flex-col justify-end overflow-hidden rounded-3xl bg-navy p-6 text-white">
              <Image
                src={historiaImg}
                alt="Collage con leyendas del Real Madrid de distintas épocas"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                placeholder="blur"
                className="-z-20 object-cover transition-transform duration-1000 ease-spring group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-navy-deep/40" aria-hidden="true" />
              <span className="text-sm font-semibold tracking-wide text-gold uppercase">Leyendas</span>
              <p className="max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
                De Di Stéfano a Raúl, una camiseta que pesa
              </p>
            </article>
          </Reveal>

          <Reveal as="li" delay={100}>
            <article className="flex h-full flex-col justify-between rounded-3xl bg-navy p-6 text-white">
              <span className="text-sm font-semibold tracking-wide text-gold uppercase">6 de marzo</span>
              <div>
                <span className="block text-6xl font-semibold tracking-tighter sm:text-7xl">1902</span>
                <p className="text-sm text-white/70">Nace el Madrid Football Club</p>
              </div>
            </article>
          </Reveal>

          <Reveal as="li" delay={150}>
            <article className="group flex h-full flex-col items-center justify-between rounded-3xl bg-white p-4">
              <Image
                src={camiseta}
                alt="Camiseta oficial del Real Madrid de la temporada 2026/27"
                sizes="200px"
                className="h-3/4 w-auto object-contain transition-transform duration-700 ease-spring group-hover:-rotate-3 group-hover:scale-105"
              />
              <p className="text-center text-sm font-semibold">El blanco, desde el primer día</p>
            </article>
          </Reveal>

          <Reveal as="li" delay={200} className="col-span-2">
            <HitoFoto
              src={quinta}
              alt="Final de la Copa de Europa de 1960 en Glasgow"
              anio="1956–1960"
              texto="Cinco Copas de Europa seguidas, cerradas con el 7–3 al Eintracht en Glasgow"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>

          <Reveal as="li" delay={100}>
            <article className="flex h-full flex-col justify-between rounded-3xl bg-royal p-6 text-white">
              <TrofeoIcono src={sigloXX} className="size-12" />
              <div>
                <span className="block text-4xl font-semibold tracking-tight">N.º 1</span>
                <p className="text-sm text-white/80">Mejor club del siglo XX según la FIFA, año 2000</p>
              </div>
            </article>
          </Reveal>

          <Reveal as="li" delay={150}>
            <HitoFoto
              src={estadio}
              alt="Interior del Santiago Bernabéu"
              anio="1947"
              texto="Nace el Nuevo Chamartín, hoy Santiago Bernabéu"
              sizes="(min-width: 1024px) 25vw, 50vw"
            />
          </Reveal>

          <Reveal as="li" delay={200} className="col-span-2">
            <HitoFoto
              src={decimoquinta}
              alt="La plantilla celebra la Decimoquinta en Wembley"
              anio="2024"
              texto="La Decimoquinta, en Wembley ante el Borussia Dortmund"
              posicion="object-[50%_30%]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
