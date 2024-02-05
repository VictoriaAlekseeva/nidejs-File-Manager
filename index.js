import { getUsername } from './helpers/getUsername.js';
import readline from 'readline';
import { homedir } from 'os';
import { chdir } from 'process';
import { up } from './handlers/up.js';
import { cd } from './handlers/cd.js';
import { ls } from './handlers/ls.js';
import { cat } from './handlers/cat.js';
import { add } from './handlers/add.js';
import { rn } from './handlers/rn.js';
import { cp } from './handlers/cp.js';
import { mv } from './handlers/mv.js';
import { rm } from './handlers/rm.js';
import { osData } from './handlers/osData.js';
import { calculateHash } from './handlers/calculateHash.js';

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
    const formattedInput = input.trim();
    switch (formattedInput.split(' ')[0]) {
      case '.exit':
        rl.close();
        break;

      case 'up':
        up();
        rl.prompt();
        break;

      case 'cd':
        cd(formattedInput);
        rl.prompt();
        break;

      case 'ls':
        ls();
        rl.prompt();
        break;

      case 'cat':
        cat(formattedInput);
        rl.prompt();
        break;

      case 'add':
        add(formattedInput);
        rl.prompt();
        break;

      case 'rn':
        rn(formattedInput);
        rl.prompt();
        break;

      case 'cp':
        cp(formattedInput);
        rl.prompt();
        break;

      case 'mv':
        mv(formattedInput);
        rl.prompt();
        break;
      case 'rm':
        rm(formattedInput);
        rl.prompt();
        break;
      case 'os':
        osData(formattedInput);
        rl.prompt();
        break;
      case 'hash':
        calculateHash(formattedInput);
        rl.prompt();
        break;
      default:
        console.log(`You are currently in ${process.cwd()}`)
        rl.prompt();
    }
  });

  rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  });

}

app();