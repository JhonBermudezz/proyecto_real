const frases = [
  "Hala Madrid",
  "Real Madrid CF",
  "15 Copas de Europa",
  "Estadio Bernabéu",
  "Desde 1902",
  "Y nada más",
];

// Cada mitad debe ser más ancha que cualquier pantalla para que el bucle no deje ver el final
const REPETICIONES = 3;
const tira = Array.from({ length: REPETICIONES }, () => frases).flat();

export function Marquee() {
  const fila = (oculta: boolean) => (
    <ul aria-hidden={oculta || undefined} className="flex shrink-0 items-center">
      {tira.map((f, i) => (
        <li key={i} aria-hidden={i >= frases.length || undefined} className="flex items-center gap-8 pr-8">
          <span className="text-2xl font-medium tracking-tight whitespace-nowrap text-white/40 uppercase">
            {f}
          </span>
          <span className="size-2 rounded-full bg-gold" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden border-y border-white/10 bg-navy-deep py-4">
      <div className="flex w-max animate-marquee">
        {fila(false)}
        {fila(true)}
      </div>
    </div>
  );
}
