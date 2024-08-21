import { defineConfig } from "vite";
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts()],
  build: {
    outDir: 'build',
    lib: {
      entry: "core/index.ts", 
      name: "three-auto", 
      fileName: (format) => `three-auto.${format}.js`,
    },
  },
});
