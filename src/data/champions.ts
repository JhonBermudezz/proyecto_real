import type { StaticImageData } from "next/image";
import first from "@/assets/champions/first.webp";
import second from "@/assets/champions/second.webp";
import tres from "@/assets/champions/tres.webp";
import cuatro from "@/assets/champions/cuatro.webp";
import quinta from "@/assets/champions/quinta.webp";
import sexta from "@/assets/champions/sexta.webp";
import siete from "@/assets/champions/siete.webp";
import ocho from "@/assets/champions/ocho.webp";
import nueve from "@/assets/champions/nueve.webp";
import diez from "@/assets/champions/diez.webp";
import once from "@/assets/champions/once.webp";
import doce from "@/assets/champions/doce.webp";
import trece from "@/assets/champions/cetre.webp";
import catorce from "@/assets/champions/catorce.webp";
import trofeo from "@/assets/kie/trophy.webp";

export type Final = {
  numero: number;
  anio: number;
  ciudad: string;
  fecha: string;
  rival: string;
  resultado: string;
  titulo: string;
  subtitulo: string;
  texto: string[];
  foto: StaticImageData;
};

export const finales: Final[] = [
  {
    numero: 1,
    anio: 1956,
    ciudad: "París",
    fecha: "Miércoles 13 de junio de 1956",
    rival: "Stade de Reims",
    resultado: "4–3",
    titulo: "Nuestra primera Champions",
    subtitulo: "La gran remontada",
    texto: [
      "El Real Madrid, que respaldó la creación del torneo desde que conoció la idea original, fue su primer campeón. Tras eliminar a Servette, Partizán y Milan, el equipo de José Villalonga se midió en la final al Stade de Reims.",
      "Planteado como un duelo entre Di Stéfano y Kopa, el partido fue memorable. El Madrid remontó un 0–2 en apenas diez minutos y reaccionó a un nuevo gol francés al inicio de la segunda parte. Marquitos y Héctor Rial firmaron el 4–3 en el tramo final. El idilio con la Copa de Europa acababa de comenzar.",
    ],
    foto: first,
  },
  {
    numero: 2,
    anio: 1957,
    ciudad: "Madrid",
    fecha: "Jueves 30 de mayo de 1957",
    rival: "Fiorentina",
    resultado: "2–0",
    titulo: "Hacia una hegemonía madridista",
    subtitulo: "El trono europeo sigue siendo blanco",
    texto: [
      "El Real Madrid revalidó su título ante la Fiorentina en un Santiago Bernabéu repleto. La férrea defensa del campeón italiano complicó mucho el partido.",
      "En el tramo final, Di Stéfano, de penalti, y Gento materializaron la superioridad madridista.",
    ],
    foto: second,
  },
  {
    numero: 3,
    anio: 1958,
    ciudad: "Bruselas",
    fecha: "Miércoles 28 de mayo de 1958",
    rival: "Milan",
    resultado: "3–2",
    titulo: "Europa a sus pies",
    subtitulo: "Tricampeones del viejo continente",
    texto: [
      "Antes de la final, los blancos eliminaron al Royal Antwerp, al Sevilla y al Vasas húngaro. El Milan no se lo puso nada fácil: en el minuto 78, con 1–1, Grillo adelantó al equipo de Viani.",
      "Rial empató en el 79 y Gento consiguió la victoria en la prórroga.",
    ],
    foto: tres,
  },
  {
    numero: 4,
    anio: 1959,
    ciudad: "Stuttgart",
    fecha: "Miércoles 3 de junio de 1959",
    rival: "Stade de Reims",
    resultado: "2–0",
    titulo: "Un equipo de oro",
    subtitulo: "La magia de Di Stéfano",
    texto: [
      "Fue un duelo cómodo para el Madrid. Mateos abrió el marcador a los dos minutos y, pese a un penalti fallado y la lesión de Kopa, el dominio siempre fue blanco.",
      "En el minuto 49, Di Stéfano marcó en su cuarta final consecutiva con un fuerte disparo desde 25 metros.",
    ],
    foto: cuatro,
  },
  {
    numero: 5,
    anio: 1960,
    ciudad: "Glasgow",
    fecha: "Miércoles 18 de mayo de 1960",
    rival: "Eintracht Frankfurt",
    resultado: "7–3",
    titulo: "Pentacampeón de Europa",
    subtitulo: "La mejor final de la Copa de Europa",
    texto: [
      "En el minuto 18, el gol de Richard Kress desató la euforia alemana. Nueve minutos después, Di Stéfano abrió la que sería la mayor goleada en una final del torneo.",
      "Un triplete de Di Stéfano y cuatro goles de Puskas cerraron un ciclo irrepetible: cinco Copas de Europa seguidas.",
    ],
    foto: quinta,
  },
  {
    numero: 6,
    anio: 1966,
    ciudad: "Bruselas",
    fecha: "Miércoles 11 de mayo de 1966",
    rival: "Partizán",
    resultado: "2–1",
    titulo: "La Sexta del Madrid y de Gento",
    subtitulo: "Dulce remontada",
    texto: [
      "En el minuto 70, Grosso habilitó a Amancio, que se escapó tres veces de su marcador y definió con serenidad para empatar. Después, Serena la colgó por la escuadra.",
      "La final quedó marcada por el récord de Gento, que levantó las seis primeras Copas de Europa del club.",
    ],
    foto: sexta,
  },
  {
    numero: 7,
    anio: 1998,
    ciudad: "Ámsterdam",
    fecha: "Miércoles 20 de mayo de 1998",
    rival: "Juventus",
    resultado: "1–0",
    titulo: "La gloria 32 años después",
    subtitulo: "Pedja contra el gafe",
    texto: [
      "Pasados veinte minutos de la reanudación, Mijatovic recogió un rechace en el área, engañó a Peruzzi y definió con la zurda.",
      "Fue su único gol en toda la competición y coronó un partido perfecto del equipo de Jupp Heynckes, con Hierro, Sanchís y Redondo como pilares.",
    ],
    foto: siete,
  },
  {
    numero: 8,
    anio: 2000,
    ciudad: "París",
    fecha: "Miércoles 24 de mayo de 2000",
    rival: "Valencia",
    resultado: "3–0",
    titulo: "Un rodillo reconquista París",
    subtitulo: "Goleada en la primera final española",
    texto: [
      "El Madrid volvía a una final dos años después con un propósito: vengar la perdida en París en 1981.",
      "Morientes abrió el marcador de cabeza antes del descanso. Una volea de McManaman y una carrera antológica de Raúl sentenciaron la final para el equipo de Vicente del Bosque.",
    ],
    foto: ocho,
  },
  {
    numero: 9,
    anio: 2002,
    ciudad: "Glasgow",
    fecha: "Miércoles 15 de mayo de 2002",
    rival: "Bayer Leverkusen",
    resultado: "2–1",
    titulo: "Una volea para la historia",
    subtitulo: "El golazo magistral de Zidane",
    texto: [
      "Raúl adelantó al Madrid tras una jugada con Roberto Carlos y Lucio empató de cabeza.",
      "Entonces llegó la genialidad: Zidane conectó una volea imposible a la escuadra tras un centro de Roberto Carlos. Casillas, héroe improvisado por la lesión de César, hizo el resto.",
    ],
    foto: nueve,
  },
  {
    numero: 10,
    anio: 2014,
    ciudad: "Lisboa",
    fecha: "Sábado 24 de mayo de 2014",
    rival: "Atlético de Madrid",
    resultado: "4–1",
    titulo: "La ansiada Décima",
    subtitulo: "Remontada épica en Lisboa",
    texto: [
      "La primera final entre dos equipos de la misma ciudad. Godín adelantó al Atlético antes del descanso y el Madrid atacó sin premio durante toda la segunda parte.",
      "En el minuto 93, Sergio Ramos cabeceó un centro de Modric. La prórroga fue blanca: Bale, Marcelo y Cristiano sellaron un triunfo histórico.",
    ],
    foto: diez,
  },
  {
    numero: 11,
    anio: 2016,
    ciudad: "Milán",
    fecha: "Sábado 28 de mayo de 2016",
    rival: "Atlético de Madrid",
    resultado: "1–1 (5–3 pen.)",
    titulo: "La Undécima",
    subtitulo: "Desde los once metros",
    texto: [
      "Sergio Ramos adelantó al Madrid tras una falta lateral de Kroos. Carrasco empató en la segunda parte y el partido llegó a la prórroga.",
      "En los penaltis marcaron Lucas Vázquez, Marcelo, Bale, Ramos y Cristiano Ronaldo. Otro título para el Rey de Europa.",
    ],
    foto: once,
  },
  {
    numero: 12,
    anio: 2017,
    ciudad: "Cardiff",
    fecha: "Sábado 3 de junio de 2017",
    rival: "Juventus",
    resultado: "4–1",
    titulo: "Memorable segunda parte",
    subtitulo: "Historia que tú hiciste",
    texto: [
      "Al descanso se llegó con un gol por bando. En la segunda mitad, Casemiro marcó el 1–2, Cristiano firmó su doblete tras una gran jugada de Modric y Asensio sentenció en el 90.",
      "El Real Madrid se convirtió en el primer equipo en ganar dos Champions League consecutivas.",
    ],
    foto: doce,
  },
  {
    numero: 13,
    anio: 2018,
    ciudad: "Kiev",
    fecha: "Sábado 26 de mayo de 2018",
    rival: "Liverpool",
    resultado: "3–1",
    titulo: "Una chilena para la historia",
    subtitulo: "Benzema y Bale certifican el triunfo",
    texto: [
      "Las lesiones de Salah y Carvajal marcaron una primera parte igualada. Benzema abrió el marcador y Mané respondió rápido.",
      "La entrada de Bale decidió la final: doblete y una chilena espectacular. Cuatro Copas de Europa en cinco años.",
    ],
    foto: trece,
  },
  {
    numero: 14,
    anio: 2022,
    ciudad: "París",
    fecha: "Sábado 28 de mayo de 2022",
    rival: "Liverpool",
    resultado: "1–0",
    titulo: "Una Champions de noches mágicas",
    subtitulo: "Vini Jr. certifica el triunfo en París",
    texto: [
      "Tras tres remontadas en el Bernabéu ante PSG, Chelsea y Manchester City, el Madrid volvió a encontrarse con el Liverpool.",
      "Courtois, MVP de la final, sostuvo el empate en la primera mitad. En la segunda, Vini Jr. culminó una gran jugada colectiva.",
    ],
    foto: catorce,
  },
  {
    numero: 15,
    anio: 2024,
    ciudad: "Londres",
    fecha: "Sábado 1 de junio de 2024",
    rival: "Borussia Dortmund",
    resultado: "2–0",
    titulo: "La Decimoquinta en Wembley",
    subtitulo: "Carvajal y Vinícius agrandan la leyenda",
    texto: [
      "El Dortmund dominó la primera parte y Courtois volvió a ser decisivo. En la segunda, el Madrid se adueñó del partido.",
      "Carvajal cabeceó un córner de Kroos en el minuto 74 y Vinícius sentenció en el 83. Kroos se despidió del club como campeón de Europa.",
    ],
    foto: trofeo,
  },
];
