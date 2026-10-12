import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import historiaImg from "@/assets/club/historia-real-img.webp";
import camiseta from "@/assets/real/camiseta.webp";
import { Reveal } from "./reveal";

const datos = [
  { k: "1902", v: "Año de fundación" },
  { k: "N.º 1", v: "Mejor club del siglo XX (FIFA)" },
  { k: "1947", v: "Bernabéu, su casa" },
];

export function Historia() {
  return (
    <section id="historia" aria-labelledby="historia-titulo" className="bg-mist py-24 text-navy lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <span className="text-sm font-semibold tracking-wide text-royal uppercase">Historia</span>
            <h2 id="historia-titulo" className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Más de un siglo convirtiendo
              <br className="hidden sm:block" /> la victoria en costumbre
            </h2>
            <p className="text-lg text-navy/70">
              Fundado el 6 de marzo de 1902, el Real Madrid es uno de los clubes más importantes del
              mundo a nivel deportivo, social y económico. Su camiseta blanca, su escudo y los
              jugadores que la han defendido forman parte de una de las grandes leyendas del deporte.
            </p>
            <p className="text-lg text-navy/70">
              Sus éxitos, celebrados en la fuente de La Cibeles, han forjado la historia de un club
              acostumbrado a ganar y con un palmarés que nadie ha igualado en Europa.
            </p>
            <dl className="grid grid-cols-3 divide-x divide-navy/10 rounded-2xl bg-white py-4">
              {datos.map((d) => (
                <div key={d.k} className="flex flex-col gap-1 px-4">
                  <dt className="order-2 text-xs text-slate">{d.v}</dt>
                  <dd className="text-2xl font-semibold tracking-tight text-navy">{d.k}</dd>
                </div>
              ))}
            </dl>
            <a
              href="https://www.realmadrid.com/es-ES/el-club/historia"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-max items-center gap-2 rounded-full bg-navy px-3 py-2 text-base font-semibold text-white transition-all duration-700 ease-spring hover:bg-royal active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
            >
              Leer la historia completa
              <ArrowUpRight
                weight="bold"
                className="size-4 transition-transform duration-700 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>

          <Reveal delay={150} className="relative">
            <div className="relative aspect-[4/3] -rotate-2 overflow-hidden rounded-3xl shadow-2xl shadow-navy/20 transition-transform duration-700 ease-spring hover:rotate-0">
              <Image
                src={historiaImg}
                alt="Collage con leyendas del Real Madrid a lo largo de su historia"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                placeholder="blur"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-4 hidden w-40 rotate-6 rounded-3xl bg-white p-4 shadow-xl shadow-navy/10 transition-transform duration-700 ease-spring hover:rotate-0 sm:block lg:w-48">
              <Image
                src={camiseta}
                alt="Camiseta oficial del Real Madrid de la temporada 2026/27"
                sizes="192px"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
