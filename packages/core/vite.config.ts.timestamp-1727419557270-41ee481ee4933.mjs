// packages/core/vite.config.ts
import { defineConfig } from "file:///Users/channel1/Desktop/Project/three-auto/node_modules/.pnpm/vite@5.4.2/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/channel1/Desktop/Project/three-auto/node_modules/.pnpm/vite-plugin-dts@4.0.3_cnaj464zrnuwf7kxzqzgwj77y4/node_modules/vite-plugin-dts/dist/index.mjs";
import glsl from "file:///Users/channel1/Desktop/Project/three-auto/node_modules/.pnpm/vite-plugin-glsl@1.3.0_vite@5.4.2/node_modules/vite-plugin-glsl/src/index.js";
var vite_config_default = defineConfig({
  plugins: [
    dts(),
    glsl({
      compress: true,
      watch: true
    })
  ],
  build: {
    outDir: "dist",
    lib: {
      entry: "src/index.ts",
      name: "three-auto",
      fileName: (format) => `three-auto.${format}.js`
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGFja2FnZXMvY29yZS92aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9jaGFubmVsMS9EZXNrdG9wL1Byb2plY3QvdGhyZWUtYXV0by9wYWNrYWdlcy9jb3JlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvY2hhbm5lbDEvRGVza3RvcC9Qcm9qZWN0L3RocmVlLWF1dG8vcGFja2FnZXMvY29yZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2hhbm5lbDEvRGVza3RvcC9Qcm9qZWN0L3RocmVlLWF1dG8vcGFja2FnZXMvY29yZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcbmltcG9ydCBnbHNsIGZyb20gXCJ2aXRlLXBsdWdpbi1nbHNsXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgZHRzKCksXG4gICAgZ2xzbCh7XG4gICAgICBjb21wcmVzczogdHJ1ZSxcbiAgICAgIHdhdGNoOiB0cnVlLFxuICAgIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIG91dERpcjogXCJkaXN0XCIsXG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogXCJzcmMvaW5kZXgudHNcIixcbiAgICAgIG5hbWU6IFwidGhyZWUtYXV0b1wiLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGB0aHJlZS1hdXRvLiR7Zm9ybWF0fS5qc2AsXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVixTQUFTLG9CQUFvQjtBQUN2WCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBR2pCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLEtBQUs7QUFBQSxNQUNILFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxJQUNULENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVLENBQUMsV0FBVyxjQUFjLE1BQU07QUFBQSxJQUM1QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
