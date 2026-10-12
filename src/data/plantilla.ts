import type { StaticImageData } from "next/image";
import konate from "@/assets/fichajes/konate.webp";
import cucurella from "@/assets/fichajes/cucurella.webp";
import dumfries from "@/assets/fichajes/dumfries.webp";
import bernardo from "@/assets/fichajes/bernardo.webp";
import diomande from "@/assets/fichajes/diomande.webp";
import espi from "@/assets/fichajes/espi.webp";
import thiago from "@/assets/fichajes/thiago.webp";

const PLANTILLA_URL =
  "https://www.realmadrid.com/es-ES/futbol/primer-equipo-masculino/plantilla";

export type Fichaje = {
  dorsal: number;
  nombre: string;
  posicion: string;
  procedencia: string;
  nacimiento: string;
  foto: StaticImageData;
  perfil: string;
};

/* Fichajes de la temporada 2026/27 según realmadrid.com */
export const fichajes: Fichaje[] = [
  {
    dorsal: 20,
    nombre: "Bernardo Silva",
    posicion: "Centrocampista",
    procedencia: "Manchester City",
    nacimiento: "Lisboa, Portugal · 1994",
    foto: bernardo,
    perfil: `${PLANTILLA_URL}/bernardo-silva`,
  },
  {
    dorsal: 16,
    nombre: "Ibrahima Konaté",
    posicion: "Defensa",
    procedencia: "Liverpool",
    nacimiento: "París, Francia · 1999",
    foto: konate,
    perfil: `${PLANTILLA_URL}/ibrahima-konate`,
  },
  {
    dorsal: 17,
    nombre: "Marc Cucurella",
    posicion: "Defensa",
    procedencia: "Chelsea",
    nacimiento: "Alella, Barcelona · 1998",
    foto: cucurella,
    perfil: `${PLANTILLA_URL}/marc-cucurella-saseta`,
  },
  {
    dorsal: 24,
    nombre: "Denzel Dumfries",
    posicion: "Defensa",
    procedencia: "Inter de Milán",
    nacimiento: "Róterdam, Países Bajos · 1996",
    foto: dumfries,
    perfil: `${PLANTILLA_URL}/denzel-dumfries`,
  },
  {
    dorsal: 25,
    nombre: "Yan Diomande",
    posicion: "Delantero",
    procedencia: "RB Leipzig",
    nacimiento: "Abiyán, Costa de Marfil · 2006",
    foto: diomande,
    perfil: `${PLANTILLA_URL}/yan-diomande`,
  },
  {
    dorsal: 19,
    nombre: "Carlos Espí",
    posicion: "Delantero",
    procedencia: "Levante",
    nacimiento: "Tavernes de Valldigna, Valencia · 2005",
    foto: espi,
    perfil: `${PLANTILLA_URL}/carlos-espi`,
  },
];

export const canterano: Fichaje = {
  dorsal: 27,
  nombre: "Thiago Pitarch",
  posicion: "Centrocampista",
  procedencia: "La Fábrica",
  nacimiento: "Fuenlabrada · 2007",
  foto: thiago,
  perfil: `${PLANTILLA_URL}/thiago-pitarch-pinar`,
};

export const plantilla: { linea: string; jugadores: [number, string][] }[] = [
  {
    linea: "Porteros",
    jugadores: [
      [1, "Courtois"],
      [13, "Lunin"],
    ],
  },
  {
    linea: "Defensas",
    jugadores: [
      [2, "Asencio"],
      [3, "E. Militão"],
      [4, "Huijsen"],
      [12, "Trent"],
      [16, "Konaté"],
      [17, "Cucurella"],
      [18, "Á. Carreras"],
      [22, "Rüdiger"],
      [23, "F. Mendy"],
      [24, "Dumfries"],
    ],
  },
  {
    linea: "Centrocampistas",
    jugadores: [
      [5, "Bellingham"],
      [6, "Camavinga"],
      [8, "Valverde"],
      [14, "Tchouameni"],
      [15, "Arda Güler"],
      [20, "Bernardo"],
      [27, "Thiago"],
    ],
  },
  {
    linea: "Delanteros",
    jugadores: [
      [7, "Vini Jr."],
      [9, "Endrick"],
      [10, "Mbappé"],
      [11, "Rodrygo"],
      [19, "C. Espí"],
      [21, "Brahim"],
      [25, "Yan Diomande"],
    ],
  },
];

export const PLANTILLA_OFICIAL = PLANTILLA_URL;
