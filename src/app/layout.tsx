import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://actualidad-real-madrid.netlify.app"),
  title: "Real Madrid · Historia, leyendas y Champions",
  description:
    "Proyecto fan del Real Madrid: su historia, los máximos goleadores, el Bernabéu, las 15 Copas de Europa y los fichajes de la temporada 2026/27.",
  openGraph: {
    title: "Real Madrid · Historia, leyendas y Champions",
    description: "Historia, goleadores, el Bernabéu, las 15 Copas de Europa y la plantilla 2026/27.",
    locale: "es_ES",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#0a1730",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${geist.variable} antialiased`}>
      <body className="font-sans">
        <a
          href="#contenido"
          className="sr-only rounded-full bg-gold px-3 py-2 text-sm font-semibold text-navy focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60]"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
