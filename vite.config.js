import { defineConfig } from "vite";
import dts from 'vite-plugin-dts'
import {createHtmlPlugin} from "vite-plugin-html"

const HTMLParams = {
  minify: true,
  pages:[
    {
      fileName: 'index',
      entry:'/src/main.ts',
      template: 'index.html'
    }
  ]
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts(),createHtmlPlugin(HTMLParams)],
  build: {
    outDir: 'build',
    lib: {
      entry: "core/index.ts", 
      name: "three-auto", 
      fileName: (format) => `three-auto.${format}.js`,
    },
  },
});
