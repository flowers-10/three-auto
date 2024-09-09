import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function updateVersion(filePath, version) {
  const packageJsonContent = await fs.readFile(filePath, 'utf8');
  const packageJson = JSON.parse(packageJsonContent);

  // 更新版本号
  packageJson.version = version;

  // 更新依赖项版本
  updateDependencyVersions(packageJson, version);

  await fs.writeFile(filePath, JSON.stringify(packageJson, null, 2) + '\n');
}

function updateDependencyVersions(packageJson, version) {
  // 更新 dependencies 中的版本号
  if (packageJson.dependencies) {
    Object.keys(packageJson.dependencies).forEach(dependency => {
      if (packageJson.dependencies[dependency].startsWith('workspace:')) {
        packageJson.dependencies[dependency] = `workspace:${version}`;
      }
    });
  }

  // 更新 devDependencies 中的版本号
  if (packageJson.devDependencies) {
    Object.keys(packageJson.devDependencies).forEach(dependency => {
      if (packageJson.devDependencies[dependency].startsWith('workspace:')) {
        packageJson.devDependencies[dependency] = `workspace:${version}`;
      }
    });
  }

  // 更新 peerDependencies 中的版本号
  if (packageJson.peerDependencies) {
    Object.keys(packageJson.peerDependencies).forEach(dependency => {
      if (packageJson.peerDependencies[dependency].startsWith('workspace:')) {
        packageJson.peerDependencies[dependency] = `workspace:${version}`;
      }
    });
  }
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

  // 在所有项目版本更新后执行 pnpm install
  const pnpmInstall = spawn('pnpm', ['install']);

  pnpmInstall.on('exit', (code, signal) => {
    if (code !== 0) {
      console.error(`pnpm install exited with code ${code}`);
    } else {
      console.log('pnpm install completed successfully.');
    }
  });

  pnpmInstall.stderr.on('data', data => {
    console.error(`stderr: ${data}`);
  });

  pnpmInstall.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
  });
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

function autoIncrementLastVersionPart(version) {
  const parts = version.split('.').map(part => parseInt(part, 10));
  parts[parts.length - 1] += 1;
  return parts.join('.');
}

updateVersions(version);