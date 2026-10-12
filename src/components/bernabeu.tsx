import Image from "next/image";
import { ArrowDown } from "@phosphor-icons/react/ssr";
import exterior from "@/assets/real/bernabeu-aereo.webp";
import interior from "@/assets/real/bernabeu-interior.webp";
import ciudad from "@/assets/real/bernabeu-ciudad.webp";
import { Reveal } from "./reveal";

const datos = [
  { k: "1947", v: "Inauguración" },
  { k: "Castellana", v: "Paseo de la" },
  { k: "Chamartín", v: "Distrito" },
  { k: "Élite", v: "Categoría UEFA" },
];

export function Bernabeu() {
  return (
    <section
      id="bernabeu"
      aria-labelledby="bernabeu-titulo"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-navy-deep"
    >
      <Image
        src={exterior}
        alt="Vista aérea del Santiago Bernabéu renovado, con su fachada de láminas de acero"
        fill
        sizes="100vw"
        placeholder="blur"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-navy-deep/55" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-4 top-20 bottom-4 rounded-3xl border-2 border-white/80 sm:inset-x-8 sm:bottom-8 lg:inset-x-12 lg:top-24 lg:bottom-12"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col px-8 pt-16 pb-12 sm:px-12 lg:px-16 lg:pt-20 lg:pb-20">
        <Reveal className="flex flex-col items-center">
          <h2
            id="bernabeu-titulo"
            className="text-6xl font-bold tracking-tighter text-white uppercase sm:text-8xl lg:text-9xl"
          >
            Bernabéu
          </h2>
          <p className="mt-2 self-end text-sm text-gold-soft sm:mr-8">El templo blanco desde 1947</p>
        </Reveal>

        <div className="mt-12 flex flex-1 items-center justify-between gap-8">
          <a
            href="#champions"
            className="hidden flex-col items-center gap-4 text-xs tracking-widest text-white/70 uppercase transition-colors duration-700 ease-spring hover:text-white focus-visible:outline-2 focus-visible:outline-gold sm:flex"
          >
            <span className="h-8 w-px bg-white/70" aria-hidden="true" />
            <span className="[writing-mode:vertical-rl] rotate-180">Baja para ver las finales</span>
            <ArrowDown weight="bold" className="size-4" />
          </a>

          <Reveal delay={150} className="ml-auto">
            <dl className="flex flex-col gap-4 border-r-2 border-white/70 pr-4 text-right">
              {datos.map((d) => (
                <div key={d.k} className="flex flex-col">
                  <dt className="text-xs tracking-widest text-white/70 uppercase">{d.v}</dt>
                  <dd className="text-xl font-semibold tracking-wide uppercase">{d.k}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-12 grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          <Reveal className="max-w-xl rounded-3xl border border-white/15 bg-navy-deep/50 p-6 backdrop-blur-xl">
            <p className="text-base text-white/80">
              Situado en pleno Paseo de la Castellana, el Santiago Bernabéu se inauguró el 14 de
              diciembre de 1947. Su renovación lo ha convertido en un estadio de vanguardia, con
              cubierta retráctil y una fachada envolvente de acero que ya es símbolo de Madrid.
            </p>
          </Reveal>
          <Reveal delay={150} className="flex gap-4">
            {[
              { src: interior, alt: "Interior del Bernabéu con la cubierta cerrada y las gradas vacías", label: "El terreno de juego" },
              { src: ciudad, alt: "El Bernabéu en el Paseo de la Castellana visto desde el aire", label: "En la Castellana" },
            ].map((f) => (
              <figure key={f.label} className="relative w-36 overflow-hidden rounded-2xl border border-white/20 sm:w-48">
                <Image src={f.src} alt={f.alt} sizes="192px" placeholder="blur" className="aspect-[4/3] object-cover" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-navy-deep/60 px-3 py-2 text-xs backdrop-blur-md">
                  {f.label}
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
