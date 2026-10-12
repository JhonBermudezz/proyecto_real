import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Historia } from "@/components/historia";
import { Palmares } from "@/components/palmares";
import { Tagline } from "@/components/tagline";
import { Goleadores } from "@/components/goleadores";
import { Bernabeu } from "@/components/bernabeu";
import { Champions } from "@/components/champions";
import { Fichajes } from "@/components/fichajes";
import { Plantilla } from "@/components/plantilla";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="contenido">
        <Hero />
        <Marquee />
        <Historia />
        <Palmares />
        <Tagline />
        <Goleadores />
        <Bernabeu />
        <Champions />
        <Fichajes />
        <Plantilla />
      </main>
      <Footer />
    </>
  );
}
