import { getUsername } from './helpers/getUsername.js';
import readline from 'readline';
import {homedir} from 'os';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { chdir } from 'process';
import { up } from './handlers/up.js';
import {cd} from './handlers/cd.js';
import {ls} from './handlers/ls.js';
import {cat} from './handlers/cat.js';
import { add } from './handlers/add.js';

function app() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
  });

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
      cd(input);
    } if (input === 'ls') {
      ls();
    } if (input.startsWith('cat ')) {
      cat(input);
    } if (input.startsWith('add ')) {
      add(input)
    }else {
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