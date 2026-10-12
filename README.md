# Real Madrid · Proyecto fan

Mi primera página web, rehecha en 2026 con **Next.js 16**, **TypeScript** y **Tailwind CSS v4**.

La versión original (HTML, CSS y JS, 2022) sigue intacta en [`public/legacy`](public/legacy) y se puede ver en `/legacy/index.html`.

Tiktok: [@jhondev2022](https://www.tiktok.com/@jhondev2022) · GitHub: [JhonBermudezz](https://github.com/JhonBermudezz)

## Secciones

- **Hero** con video en loop, tipografía gigante y tarjeta flotante del palmarés europeo
- **Historia** y palmarés oficial (15 Copas de Europa, 36 Ligas, 20 Copas del Rey…)
- **Frase de Juanito** que se ilumina palabra por palabra al hacer scroll
- **Máximos goleadores** en carrusel deslizable
- **Bernabéu** con marco y título superpuesto
- **Las 15 Copas de Europa**, de París 1956 a Wembley 2024, con línea de tiempo
- **Fichajes 2026/27** y **plantilla completa** con datos de realmadrid.com
- Navbar flotante con menú móvil a pantalla completa, página 404 propia y metadatos para redes

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de producción
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
  video/        video del hero (mp4 + webm) y póster
  legacy/       versión 2022 sin cambios
```

## Despliegue en Netlify

`netlify.toml` ya define `npm run build` y publica `.next`; Netlify detecta Next.js y aplica su runtime automáticamente. Si el sitio estaba configurado como estático, quita el "publish directory" de la configuración del panel para que mande el archivo.

## Créditos

- Fotos de jugadores y datos de plantilla y palmarés: [realmadrid.com](https://www.realmadrid.com/es-ES)
- Video del hero e imágenes ambientales (estadio, trofeo, grada, camiseta, balón) generados con IA a través de Kie
- Proyecto fan sin afiliación oficial con el Real Madrid CF
