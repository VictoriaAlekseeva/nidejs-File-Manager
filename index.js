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
    switch (input.split(' ')[0]) {
      case '.exit':
        rl.close();
        break;

      case 'up':
        up();
        rl.prompt();
        break;

      case 'cd':
        cd(input);
        rl.prompt();
        break;

      case 'ls':
        ls();
        rl.prompt();
        break;

      case 'cat':
        cat(input);
        rl.prompt();
        break;

      case 'add':
        add(input);
        rl.prompt();
        break;

      case 'rn':
        rn(input);
        rl.prompt();
        break;

      case 'cp':
        cp(input);
        rl.prompt();
        break;

      case 'mv':
        mv(input);
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