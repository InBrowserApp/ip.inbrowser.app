import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import pluginRewriteAll from "vite-plugin-rewrite-all";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    pluginRewriteAll(),
    vue(),
    VitePWA({
      includeAssets: [
        "favicon.ico",
        "favicon-dark.ico",
        "favicon.svg",
        "apple-touch-icon.png",
        "masked-icon.svg",
      ],
      workbox: {
        globPatterns: ["assets/*", "**/*.{js,css,html}"],
        maximumFileSizeToCacheInBytes: 10000000,
      },
      manifest: {
        name: "IP InBrowser.App",
        short_name: "IP",
        description:
          "IP InBrowser.App is a set of powerful IP tools. Fully runs in your browser. No server-side code.",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
