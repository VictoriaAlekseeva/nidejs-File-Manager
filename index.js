import { getUsername } from './helpers/getUsername.js';
import readline from 'readline';
import {homedir} from 'os';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { chdir } from 'process';
import { up } from './handlers/up.js';
import {goToFolder} from './handlers/goToFolder.js';
import {ls} from './handlers/ls.js'

function app() {


  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
  });

  const __filename = fileURLToPath(import.meta.url);
  // const workingDerectoryPath = dirname(__filename);

  let currentDir = homedir();
  chdir(currentDir);

  const userName = getUsername();
  console.log(`Welcome to the File Manager, ${userName}!`);
  rl.prompt()

  rl.on('line', (input) => {
    if (input === '.exit') {
      rl.close();
    } else if (input === 'up') {
      up();
    } else if (input.startsWith('cd ')) {
      goToFolder(input);
    } if (input === 'ls') {
      ls();
    } else {
      console.log('input:', input);
      console.log(`You are currently in ${currentDir}`)
      rl.prompt();
    }
  });

  rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  });

}

app();