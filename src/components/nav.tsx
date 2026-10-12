"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import escudo from "@/assets/club/escudo.png";
import { enlaces } from "@/data/enlaces";

export function Nav() {
  const [abierto, setAbierto] = useState(false);
  const [activo, setActivo] = useState<string | null>(null);

  // Marca en la navegación la sección visible
  useEffect(() => {
    const secciones = enlaces
      .map((e) => document.querySelector(e.href))
      .filter((s): s is Element => s !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActivo(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    secciones.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [abierto]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4">
      <nav
        aria-label="Principal"
        className="relative z-20 mx-auto mt-6 flex w-max max-w-full items-center gap-2 rounded-full border border-white/15 bg-navy/60 p-2 shadow-lg shadow-black/20 backdrop-blur-xl"
      >
        <a
          href="#inicio"
          className="flex items-center gap-2 rounded-full py-1 pr-3 pl-1 transition-all duration-700 ease-spring hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-gold"
        >
          <Image src={escudo} alt="" className="size-8 object-contain" priority />
          <span className="text-sm font-semibold tracking-tight">Real Madrid</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {enlaces.map((e) => (
            <li key={e.href}>
              <a
                href={e.href}
                aria-current={activo === e.href ? "true" : undefined}
                className="block rounded-full px-3 py-2 text-sm text-white/70 transition-all duration-700 ease-spring hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-gold aria-[current]:bg-white/10 aria-[current]:text-white"
              >
                {e.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#plantilla"
          className="hidden items-center gap-1 rounded-full bg-gold px-3 py-2 text-sm font-semibold text-navy transition-all duration-700 ease-spring hover:bg-gold-soft active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:flex"
        >
          Plantilla 2026/27
          <ArrowUpRight weight="bold" className="size-4" />
        </a>

        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          className="relative size-10 rounded-full bg-white/10 transition-all duration-700 ease-spring hover:bg-white/20 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-gold lg:hidden"
        >
          <span
            className={`absolute left-3 h-0.5 w-4 rounded-full bg-white transition-all duration-700 ease-spring ${abierto ? "top-[19px] rotate-45" : "top-[15px]"}`}
          />
          <span
            className={`absolute left-3 h-0.5 w-4 rounded-full bg-white transition-all duration-700 ease-spring ${abierto ? "top-[19px] -rotate-45" : "top-[23px]"}`}
          />
        </button>
      </nav>

      <div
        id="menu-movil"
        inert={!abierto}
        className={`fixed inset-0 z-10 flex flex-col justify-center bg-navy-deep/80 px-6 backdrop-blur-3xl transition-all duration-700 ease-spring lg:hidden ${abierto ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <ul className="flex flex-col gap-2">
          {[...enlaces, { href: "#plantilla", label: "Plantilla 2026/27" }].map((e, i) => (
            <li key={e.href} className="overflow-hidden">
              <a
                href={e.href}
                onClick={() => setAbierto(false)}
                style={{ transitionDelay: abierto ? `${100 + i * 50}ms` : "0ms" }}
                className={`block py-2 text-5xl font-semibold tracking-tight transition-all duration-700 ease-spring hover:text-gold focus-visible:text-gold focus-visible:outline-none ${abierto ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} ${activo === e.href ? "text-gold" : "text-white"}`}
              >
                {e.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
