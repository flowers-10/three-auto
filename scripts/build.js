import { readdir, stat } from 'fs/promises';
import { execFile } from 'child_process';
import path from 'path';

// 获取当前文件的目录
const __dirname = new URL('.', import.meta.url).pathname;

// 确保从项目根目录开始查找
const projectRoot = path.resolve(__dirname, '..');
const packagesDir = path.resolve(projectRoot, 'packages');

const exec = async (command, args) => {
  return new Promise((resolve, reject) => {
    execFile(command, args, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout);
    });
  });
};

const buildPackages = async () => {
  try {
    // 获取 packages 目录下的所有子目录
    const entries = await readdir(packagesDir);
    const dirs = await Promise.all(entries.map(async entry => {
      const stats = await stat(path.join(packagesDir, entry));
      return stats.isDirectory() ? entry : null;
    })).then(results => results.filter(dir => dir !== null));

    for (const dir of dirs) {
      console.log(`Building ${dir}...`);

      try {
        // 切换到子项目的目录
        process.chdir(path.join(packagesDir, dir));

        // 执行构建命令
        await exec('npm', ['run', 'build']);
        console.log(`${dir} build succeeded.`);
      } catch (error) {
        console.error(`${dir} build failed with error:`, error);
      } finally {
        // 回到根目录
        process.chdir(packagesDir);
      }
    }
  } catch (error) {
    console.error('Build process failed:', error);
    process.exit(1);
  }
};

// 立即执行异步函数
(async () => {
  await buildPackages();
})();