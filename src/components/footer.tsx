import Image from "next/image";
import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TiktokLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/ssr";
import escudo from "@/assets/club/escudo.png";
import { enlaces } from "@/data/enlaces";

const club = [
  { href: "https://www.facebook.com/RealMadrid/", label: "Facebook", Icon: FacebookLogo },
  { href: "https://www.instagram.com/realmadrid/", label: "Instagram", Icon: InstagramLogo },
  { href: "https://x.com/realmadrid", label: "X", Icon: XLogo },
  { href: "https://www.youtube.com/@realmadrid", label: "YouTube", Icon: YoutubeLogo },
];

const dev = [
  { href: "https://github.com/JhonBermudezz", label: "GitHub", Icon: GithubLogo },
  { href: "https://www.tiktok.com/@jhondev2022", label: "TikTok", Icon: TiktokLogo },
  { href: "https://www.instagram.com/jjbermudezsanchez/", label: "Instagram", Icon: InstagramLogo },
  { href: "https://x.com/JhonBermudezz", label: "X", Icon: XLogo },
  { href: "https://www.linkedin.com/in/jhon-jairo-bermudez-sanchez-b951b1301/", label: "LinkedIn", Icon: LinkedinLogo },
];

const linkCls =
  "inline-flex items-center gap-2 text-base text-white/70 transition-all duration-700 ease-spring hover:translate-x-1 hover:text-white focus-visible:outline-2 focus-visible:outline-gold";

export function Footer() {
  return (
    <footer className="bg-navy-deep pt-24 pb-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:px-6">
        <p className="text-6xl font-semibold tracking-tighter sm:text-8xl lg:text-9xl">
          <span className="text-hero">Hala Madrid</span>
          <br />
          <span className="text-gold">y nada más</span>
        </p>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Image src={escudo} alt="Escudo del Real Madrid" className="h-16 w-auto self-start" />
            <p className="max-w-60 text-sm text-white/70">
              Proyecto fan hecho con Next.js para aprender y practicar. Sin afiliación oficial con el
              Real Madrid CF.
            </p>
          </div>

          <nav aria-label="Secciones" className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold tracking-wide text-gold uppercase">Página</h2>
            <ul className="flex flex-col gap-2">
              {[...enlaces, { href: "#plantilla", label: "Plantilla" }].map((e) => (
                <li key={e.href}>
                  <a href={e.href} className={linkCls}>
                    {e.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/legacy/index.html" className={linkCls}>
                  Versión 2022
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold tracking-wide text-gold uppercase">Redes Real Madrid</h2>
            <ul className="flex flex-col gap-2">
              {club.map(({ href, label, Icon }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noreferrer" className={linkCls}>
                    <Icon weight="fill" className="size-4" /> {label}
                  </a>
                </li>
              ))}
              <li>
                <a href="https://www.realmadrid.com/" target="_blank" rel="noreferrer" className={linkCls}>
                  Página oficial
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold tracking-wide text-gold uppercase">Desarrollador</h2>
            <ul className="flex flex-col gap-2">
              {dev.map(({ href, label, Icon }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noreferrer" className={linkCls}>
                    <Icon weight="fill" className="size-4" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>© 2026 Jhon Jairo Bermudez Sanchez</p>
          <p>
            Fotos e iconos: realmadrid.com · Vídeo del hero: GOAT 17 en YouTube
          </p>
        </div>
      </div>
    </footer>
  );
}
