"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import escudo from "@/assets/club/escudo.png";
import parche from "@/assets/club/parche-15.svg";
import { enlaces } from "@/data/enlaces";

const todos = [...enlaces, { href: "#plantilla", label: "Plantilla" }];

/* Header clásico al estilo de realmadrid.com: barra blanca fija con escudo e insignia de las 15. */
export function Nav() {
  const [abierto, setAbierto] = useState(false);
  const [activo, setActivo] = useState<string | null>(null);

  // Marca en la navegación la sección visible
  useEffect(() => {
    const secciones = todos
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
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-white text-navy">
      <div className="relative z-20 mx-auto flex h-16 max-w-[90rem] items-center gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="menu-principal"
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            className="relative size-10 rounded-full transition-colors duration-700 ease-spring hover:bg-mist focus-visible:outline-2 focus-visible:outline-royal"
          >
            <span
              className={`absolute left-2.5 h-0.5 w-5 rounded-full bg-navy transition-all duration-700 ease-spring ${abierto ? "top-[19px] rotate-45" : "top-[14px]"}`}
            />
            <span
              className={`absolute left-2.5 top-[19px] h-0.5 w-5 rounded-full bg-navy transition-all duration-700 ease-spring ${abierto ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-2.5 h-0.5 w-5 rounded-full bg-navy transition-all duration-700 ease-spring ${abierto ? "top-[19px] -rotate-45" : "top-[24px]"}`}
            />
          </button>
          <a
            href="#inicio"
            className="rounded-full transition-transform duration-700 ease-spring hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
          >
            <Image src={escudo} alt="Real Madrid, ir al inicio" className="h-10 w-auto" priority />
          </a>
          <span className="h-8 w-px bg-navy/15" aria-hidden="true" />
          <a
            href="#champions"
            title="15 Copas de Europa"
            className="rounded-full transition-transform duration-700 ease-spring hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal"
          >
            <Image src={parche} alt="15 Copas de Europa" className="h-10 w-auto" priority />
          </a>
        </div>

        <nav aria-label="Principal" className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-4 xl:gap-6">
            {todos.map((e) => (
              <li key={e.href}>
                <a
                  href={e.href}
                  aria-current={activo === e.href ? "true" : undefined}
                  className="relative block py-2 text-base font-medium text-navy/80 transition-colors duration-700 ease-spring after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-royal after:transition-transform after:duration-700 after:ease-spring hover:text-royal hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-royal aria-[current]:text-royal aria-[current]:after:scale-x-100"
                >
                  {e.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#plantilla"
          className="ml-auto inline-flex items-center gap-1 rounded-full bg-navy px-3 py-2 text-sm font-semibold text-white transition-all duration-700 ease-spring hover:bg-royal active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal lg:ml-0"
        >
          <span className="hidden sm:inline">Plantilla</span> 2026/27
          <ArrowUpRight weight="bold" className="size-4" />
        </a>
      </div>

      <div
        id="menu-principal"
        inert={!abierto}
        className={`fixed inset-x-0 top-16 bottom-0 z-10 flex flex-col justify-center bg-navy-deep/90 px-6 backdrop-blur-3xl transition-all duration-700 ease-spring sm:px-12 ${abierto ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <ul className="mx-auto flex w-full max-w-7xl flex-col gap-2">
          {todos.map((e, i) => (
            <li key={e.href} className="overflow-hidden">
              <a
                href={e.href}
                onClick={() => setAbierto(false)}
                style={{ transitionDelay: abierto ? `${100 + i * 50}ms` : "0ms" }}
                className={`block py-2 text-5xl font-semibold tracking-tight transition-all duration-700 ease-spring hover:text-gold focus-visible:text-gold focus-visible:outline-none sm:text-6xl ${abierto ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} ${activo === e.href ? "text-gold" : "text-white"}`}
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
