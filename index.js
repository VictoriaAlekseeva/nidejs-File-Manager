import { getUsername } from './helpers/getUsername.js';
import readline from 'readline';

function app() {

  const userName = getUsername();
  console.log(`Welcome to the File Manager, ${userName}!`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
  });

  rl.on('line', (input) => {
    if (input === '.exit') {
      rl.close();
    } else {
      console.log('input:', input);
      rl.prompt();
    }
  });

  rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  });

}

app();