import { defineConfig } from "vite";
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts()],
  build: {
    lib: {
      entry: "core/index.ts", // 工具库入口
      name: "three-auto", // 工具库名称
      fileName: (format) => `auto-three.${format}.js`, // 工具库名称
    },
  },
});
