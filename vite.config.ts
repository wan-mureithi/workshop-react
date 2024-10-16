import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import { dependencies } from "./package.json"

function renderChunks(deps: Record<string, string>) {
  const chunks = {}
  Object.keys(deps).forEach((key) => {
    if (["react", "react-router-dom", "react-dom", "fsevents"].includes(key))
      return
    chunks[key] = [key]
  })
  return chunks
}

export default defineConfig({
  plugins: [react()],
  preview: {
    host: "0.0.0.0",
  },
  server: {
    hmr: { host: "0.0.0.0" },
    host: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@model": path.resolve(__dirname, "./src/model"),
      "@views": path.resolve(__dirname, "./src/views"),
    },
  },
  build: {
    sourcemap: false,
    rollupOptions: {
      external: ["fsevents"],
      output: {
        manualChunks: {
          vendor: ["react", "react-router-dom", "react-dom"],
          ...renderChunks(dependencies),
        },
      },
    },
  },
})
