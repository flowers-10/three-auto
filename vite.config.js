import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    lib: {
      entry: "core/index.ts", // 工具库入口
      name: "auto-three", // 工具库名称
      fileName: (format) => `auto-three.${format}.js`, // 工具库名称
    },
  },
});
