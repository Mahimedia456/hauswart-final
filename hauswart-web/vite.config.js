import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/", // ✅ REQUIRED for Vercel

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(process.cwd(), "index.html"),
    },
  },
});
