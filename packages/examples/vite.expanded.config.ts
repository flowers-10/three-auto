import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';
import path from 'node:path';

// Separate build entry/output: the original campus page and build config stay intact.
export default defineConfig({
  root: __dirname,
  plugins: [glsl({ compress: true, watch: false })],
  build: {
    outDir: path.resolve(__dirname, 'dist/expanded'),
    emptyOutDir: true,
    rollupOptions: { input: path.resolve(__dirname, 'campus-expanded.html') },
  },
});
