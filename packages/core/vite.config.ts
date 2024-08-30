import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import glsl from "vite-plugin-glsl";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts(),
    glsl({
      compress: true,
      watch: true,
    }),
  ],
  build: {
    outDir: "dist",
    lib: {
      entry: "src/index.ts",
      name: "three-auto",
      fileName: (format) => `three-auto.${format}.js`,
    },
  },
});
