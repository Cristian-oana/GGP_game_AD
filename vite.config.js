import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  base: "",
  plugins: [react() /*, viteSingleFile()*/],
  build: {
    assetsInlineLimit: 409600,
    rollupOptions: {
      output: {
        manualChunks: false,
        inlineDynamicImports: true,
        entryFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
  server: {
    hmr: {
      host: "localhost",
    },
  },
  resolve: {
    alias: {
      $assets: resolve("./src/assets"),
    },
  },
  usePolling: true,
});
