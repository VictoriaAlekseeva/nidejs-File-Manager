import readline from 'readline/promises';

import { commandHandler } from './src/handlers/index.js';
import { getCurrentDir } from './src/helpers/getCurrentDir.js';
import { userGreeting } from './src/helpers/userGreeting.js';
import { getUsername } from './src/helpers/getUsername.js'


function app() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
  });

  userGreeting();
  rl.prompt();

  rl.on('line', async (input) => {
    if (input.trim().toLocaleLowerCase() === '.exit') {
      rl.close()
    } else {
      await commandHandler(input);
      getCurrentDir();
      rl.prompt();
    }
  });
  rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${getUsername()}, goodbye!`);
  });
}

app();