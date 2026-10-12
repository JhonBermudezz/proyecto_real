"use client";

import { useEffect, useRef, useState } from "react";
import { SpeakerHigh, SpeakerSlash } from "@phosphor-icons/react/ssr";

const VIDEO_ID = "1G4cIVAyN2U";
const INICIO = 135; // 2:15
const FIN = 170; // 2:50

type Player = {
  mute(): void;
  unMute(): void;
  setVolume(v: number): void;
  playVideo(): void;
  seekTo(s: number, allowSeekAhead: boolean): void;
  getCurrentTime(): number;
  destroy(): void;
};

type YTNamespace = {
  Player: new (
    el: HTMLElement,
    opts: {
      videoId: string;
      host?: string;
      width?: string;
      height?: string;
      playerVars?: Record<string, number | string>;
      events?: {
        onReady?: (e: { target: Player }) => void;
        onStateChange?: (e: { target: Player; data: number }) => void;
      };
    },
  ) => Player;
};

declare global {
  interface Window {
    YT?: YTNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

/* Fondo del hero: el fragmento 2:15–2:50 del vídeo en bucle, silenciado y sin controles. */
export function HeroVideo() {
  const contenedor = useRef<HTMLDivElement>(null);
  const player = useRef<Player | null>(null);
  const [listo, setListo] = useState(false);
  const [sonido, setSonido] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let cancelado = false;
    let intervalo: number | undefined;

    const crear = () => {
      if (cancelado || !contenedor.current || !window.YT) return;
      // El reproductor reemplaza este nodo, así que no lo gestiona React
      const nodo = document.createElement("div");
      contenedor.current.appendChild(nodo);
      player.current = new window.YT.Player(nodo, {
        videoId: VIDEO_ID,
        host: "https://www.youtube-nocookie.com",
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          start: INICIO,
          end: FIN,
          playsinline: 1,
          rel: 0,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
        },
        events: {
          onReady: (e) => {
            e.target.mute();
            e.target.playVideo();
            intervalo = window.setInterval(() => {
              if (e.target.getCurrentTime() >= FIN - 0.3) e.target.seekTo(INICIO, true);
            }, 400);
          },
          onStateChange: (e) => {
            if (e.data === 1) setListo(true);
            if (e.data === 0) {
              e.target.seekTo(INICIO, true);
              e.target.playVideo();
            }
          },
        },
      });
    };

    if (window.YT?.Player) {
      crear();
    } else {
      const anterior = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        anterior?.();
        crear();
      };
      if (!document.getElementById("yt-iframe-api")) {
        const s = document.createElement("script");
        s.id = "yt-iframe-api";
        s.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(s);
      }
    }

    return () => {
      cancelado = true;
      window.clearInterval(intervalo);
      player.current?.destroy();
      player.current = null;
    };
  }, []);

  const alternarSonido = () => {
    const p = player.current;
    if (!p) return;
    if (sonido) {
      p.mute();
    } else {
      p.unMute();
      p.setVolume(60);
    }
    setSonido(!sonido);
  };

  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
        <div
          ref={contenedor}
          className={`absolute top-1/2 left-1/2 aspect-video w-[max(100%,calc((100svh-4rem)*16/9))] -translate-x-1/2 -translate-y-1/2 scale-110 transition-opacity duration-1000 ease-spring [&>iframe]:size-full ${listo ? "opacity-100" : "opacity-0"}`}
        />
      </div>
      {listo && (
        <button
          type="button"
          onClick={alternarSonido}
          aria-pressed={sonido}
          className="absolute top-6 right-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-navy-deep/60 px-3 py-2 text-sm font-semibold backdrop-blur-md transition-all duration-700 ease-spring hover:bg-navy-deep/80 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-gold sm:right-6"
        >
          {sonido ? <SpeakerHigh weight="fill" className="size-4" /> : <SpeakerSlash weight="fill" className="size-4" />}
          {sonido ? "Silenciar" : "Activar sonido"}
        </button>
      )}
    </>
  );
}
