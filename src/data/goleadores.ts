import type { StaticImageData } from "next/image";
import cr7 from "@/assets/leyendas/cr7.webp";
import kr9 from "@/assets/leyendas/kr9.webp";
import raul from "@/assets/leyendas/raul.webp";
import di from "@/assets/leyendas/di.webp";

export type Goleador = {
  posicion: number;
  nombre: string;
  apellido: string;
  goles: number;
  partidos: number;
  etapa: string;
  foto: StaticImageData;
  wiki: string;
};

export const goleadores: Goleador[] = [
  {
    posicion: 1,
    nombre: "Cristiano",
    apellido: "Ronaldo",
    goles: 450,
    partidos: 438,
    etapa: "2009 a 2018",
    foto: cr7,
    wiki: "https://es.wikipedia.org/wiki/Cristiano_Ronaldo",
  },
  {
    posicion: 2,
    nombre: "Karim",
    apellido: "Benzema",
    goles: 354,
    partidos: 648,
    etapa: "2009 a 2023",
    foto: kr9,
    wiki: "https://es.wikipedia.org/wiki/Karim_Benzema",
  },
  {
    posicion: 3,
    nombre: "Raúl",
    apellido: "González",
    goles: 323,
    partidos: 741,
    etapa: "1994 a 2010",
    foto: raul,
    wiki: "https://es.wikipedia.org/wiki/Ra%C3%BAl_Gonz%C3%A1lez_Blanco",
  },
  {
    posicion: 4,
    nombre: "Alfredo",
    apellido: "Di Stéfano",
    goles: 308,
    partidos: 396,
    etapa: "1953 a 1964",
    foto: di,
    wiki: "https://es.wikipedia.org/wiki/Alfredo_Di_St%C3%A9fano",
  },
];
