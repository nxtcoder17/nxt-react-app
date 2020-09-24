#! /usr/bin/node

const fs = require('fs-extra');
const path = require('path');
const { exec, spawn } = require('child_process');
const ora = require('ora');
const chalk = require('chalk');

const SRC_DIR = path.resolve(__dirname, '../');
const PROJECT_DIR = process.argv[2] || 'New-Project-Name';

const TOOL_NAME = chalk.bold.cyan('nxt-react-app');
const PROJECT_NAME = chalk.bold.magenta(PROJECT_DIR);

const getOra = (text) =>
  ora({
    prefixText: chalk.bold.green(`[${TOOL_NAME}] [${PROJECT_NAME}] ${text}`),
    spinner: 'arrow3',
    color: 'magenta',
    stream: process.stdout,
  });

const gitIgnore = [
  'node_modules',
  '.idea',
  '.vscode',
  'builds',
  'dist',
  'nohup.out',
];

const TO_COPY = [
  '.eslintrc.js',
  '.gitattributes',
  'jsconfig.json',
  'config.js',
  'docker-compose.yml',
  'webpack.config.js',
  'babel.config.js',
  'src',
  'public',
  'env',
];

const {
  projectDependencies,
  devDependencies,
  scripts,
} = require('../package.json');

const waitTillPackageJsonIsCreated = (dir) => {
  return new Promise((resolve) => {
    exec(`cd ${dir} && npm init -y`, (err, stdout) => {
      resolve(!!stdout);
    });
  });
};

exec(
  [`mkdir ${PROJECT_DIR}`, `cd ${PROJECT_DIR}`, 'git init'].join(' && '),
  () => {
    (async () => {
      const promises = TO_COPY.map(async (src) =>
        fs.copy(`${SRC_DIR}/${src}`, `${PROJECT_DIR}/${src}`)
      );

      promises.push(
        fs.outputFile(`${PROJECT_DIR}/.gitignore`, gitIgnore.join('\n'))
      );

      await waitTillPackageJsonIsCreated(PROJECT_DIR);

      const pathToPackageJson = path.resolve(`./${PROJECT_DIR}/package.json`);

      // eslint-disable-next-line
      const newPackageJson = require(pathToPackageJson);
      await fs.outputJSON(
        `${PROJECT_DIR}/package.json`,
        {
          ...newPackageJson,
          dependencies: projectDependencies,
          devDependencies,
          scripts,
        },
        { spaces: 2, EOL: '\n' }
      );

      const npmInstall = spawn('bash');
      npmInstall.stdin.write(`cd ${PROJECT_DIR} && npx pnpm i`);
      npmInstall.stdin.end();

      const spinner = getOra('Downloading Packages').start();

      npmInstall.on('exit', () => {
        spinner.succeed();
        getOra(`React Bootstrap ${chalk.bold.cyan('DONE')}`).succeed();
      });

      await Promise.all(promises);
    })();
  }
);
