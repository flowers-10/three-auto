import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function updateVersion(filePath, version) {
  const packageJsonContent = await fs.readFile(filePath, 'utf8');
  const packageJson = JSON.parse(packageJsonContent);
  packageJson.version = version;
  await fs.writeFile(filePath, JSON.stringify(packageJson, null, 2) + '\n');
}

function autoIncrementLastVersionPart(version) {
  const parts = version.split('.').map(part => parseInt(part, 10));
  parts[parts.length - 1] += 1;
  return parts.join('.');
}

async function updateVersions(version) {
  // 更新最外层的 package.json
  const rootPackageJsonPath = path.join(__dirname, '..', 'package.json');
  await updateVersion(rootPackageJsonPath, version);

  // 更新子项目的 package.json
  const subProjectsPath = path.join(__dirname, '..', 'packages');
  const subProjects = await fs.readdir(subProjectsPath);
  for (const subProject of subProjects) {
    const subProjectPath = path.join(subProjectsPath, subProject, 'package.json');
    try {
      await updateVersion(subProjectPath, version);
    } catch (err) {
      if (err.code === 'ENOENT') {
        console.warn(`Warning: Could not find package.json in ${subProject}`);
      } else {
        throw err;
      }
    }
  }

  console.log(`All projects updated to version ${version}`);
}

// 获取命令行参数中的版本号
const args = process.argv.slice(2);
let version;
if (args.length === 0) {
  // 如果没有提供版本号，则自动获取最外层 package.json 的版本号并增加最后一位
  const rootPackageJson = JSON.parse(await fs.readFile(path.join(__dirname, '..', 'package.json'), 'utf8'));
  version = autoIncrementLastVersionPart(rootPackageJson.version);
} else if (args.length === 1) {
  version = args[0];
} else {
  console.error('Usage: node update-versions.js [version]');
  process.exit(1);
}

updateVersions(version);