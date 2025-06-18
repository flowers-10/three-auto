import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import glsl from "vite-plugin-glsl";
import { glob } from 'glob';
import path from 'path';
import fs from 'fs';

// 获取src目录下所有的TypeScript文件作为入口点
const srcFiles = glob.sync('src/*.ts').reduce((entries, file) => {
  const name = path.basename(file, '.ts');
  entries[name] = path.resolve(__dirname, file);
  return entries;
}, {});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts(),
    glsl({
      compress: true,
      watch: true,
    }),
    // 自定义插件，确保index.html被复制到dist目录并修改文件引用
    {
      name: 'copy-and-modify-index-html',
      closeBundle() {
        // 确保index.html被复制到dist目录
        let indexHtml = fs.readFileSync('index.html', 'utf-8');
        
        // 修改文件引用，将.ts后缀改为.js，处理多种情况
        // 1. 处理标准引用 "./src/xxx.ts" -> "./src/xxx.js"
        indexHtml = indexHtml.replace(/(\.\/)?(src\/[\w]+)\.ts/g, './src/$2.js');
        
        // 2. 处理fallback列表中的引用，避免路径重复
        indexHtml = indexHtml.replace(/"\.\/src\/src\//g, '"./src/');
        
        // 3. 处理文件名提取逻辑中的.ts替换
        indexHtml = indexHtml.replace(/\.replace\("\.ts", ""\)/g, '.replace(".js", "")');
        
        // 4. 处理Object.keys(exampleMap).map中的文件路径
        indexHtml = indexHtml.replace(/(key\) => `\.\/src\/\$\{key\})\.ts/g, '$1.js');
        
        if (!fs.existsSync('dist')) {
          fs.mkdirSync('dist', { recursive: true });
        }
        fs.writeFileSync('dist/index.html', indexHtml);
        console.log('✓ index.html has been copied to dist directory with modified file references');
      }
    }
  ],
  server: {
    port: 1231
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        ...srcFiles
      },
      output: {
        // 确保生成的文件保持在src目录结构中
        entryFileNames: (chunkInfo) => {
          return chunkInfo.name === 'main' ? 'assets/[name]-[hash].js' : 'src/[name].js';
        }
      }
    },
    // 保留源文件结构
    assetsDir: '.'
  }
});
