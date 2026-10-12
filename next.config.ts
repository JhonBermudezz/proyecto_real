import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportación estática: genera HTML en out/ para servirlo en Netlify sin servidor
  output: "export",
  images: {
    // Sin servidor no hay optimización en tiempo real; los assets ya van en WebP a su tamaño
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
