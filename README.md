# Real Madrid · Proyecto fan

Mi primera página web, rehecha en 2026 con **Next.js 16**, **TypeScript** y **Tailwind CSS v4**.

La versión original (HTML, CSS y JS, 2022) sigue intacta en [`public/legacy`](public/legacy) y se puede ver en `/legacy/index.html`.

Tiktok: [@jhondev2022](https://www.tiktok.com/@jhondev2022) · GitHub: [JhonBermudezz](https://github.com/JhonBermudezz)

## Secciones

- **Header clásico** al estilo de realmadrid.com: escudo, insignia de las 15 y menú
- **Hero** con la remontada al Manchester City (2022) de fondo, en bucle del 2:15 al 2:50 con el reproductor oficial de YouTube
- **Historia** con la camiseta oficial 2026/27
- **Un palmarés de leyenda** con los iconos y datos oficiales del club
- **Frase de Juanito** que se ilumina palabra por palabra, junto a las remontadas de 2022
- **Máximos goleadores** en carrusel deslizable
- **Bernabéu** con fotos reales del estadio renovado
- **Las 15 Copas de Europa**, de París 1956 a Wembley 2024, con línea de tiempo y marcador
- **Fichajes 2026/27**, el canterano Thiago Pitarch y la **plantilla completa**
- Página 404 propia y metadatos para redes

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # exportación estática en out/
npm run lint
```

## Estructura

```
src/
  app/          layout, página principal, 404, iconos y og:image
  components/   una sección por archivo (hero, historia, champions…)
  data/         goleadores, finales de Champions, fichajes y plantilla
  assets/       imágenes optimizadas (se importan con next/image)
public/
  legacy/       versión 2022 sin cambios
```

## Despliegue en Netlify

El sitio se genera como **exportación estática** (`output: "export"`): `npm run build` deja HTML, CSS, JS e imágenes en `out/`, sin necesidad de servidor. `netlify.toml` le indica a Netlify ese comando, la carpeta `out` y Node 22. La configuración del archivo tiene prioridad sobre la del panel.

## Créditos

- Fotos del estadio, de jugadores y de la Decimoquinta, iconos de trofeos, camiseta y datos: [realmadrid.com](https://www.realmadrid.com/es-ES)
- Vídeo del hero: [GOAT 17 en YouTube](https://www.youtube.com/watch?v=1G4cIVAyN2U), incrustado con el reproductor oficial
- Imagen de la página 404 generada con IA a través de Kie
- Proyecto fan sin afiliación oficial con el Real Madrid CF
