import { defineConfig } from "vite";
import ViteRestart from "vite-plugin-restart";

export default defineConfig({
  root: "src",
  publicDir: "../static",
  server: {
    host: true,
    open: !("SANDBOX_URL" in process.env || "CODESANDBOX_HOST" in process.env),
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true,
  },
  plugins: [
    ViteRestart({
      restart: ["../static/**"],
    }),
  ],
});
