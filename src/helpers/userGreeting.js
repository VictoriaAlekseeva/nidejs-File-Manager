import { getUsername } from './getUsername.js';
import { setWorkingDirectory } from './setWorkingDirectory.js';
import { getCurrentDir } from './getCurrentDir.js';

export const userGreeting = () => {
  setWorkingDirectory();
  getCurrentDir();

  const userName = getUsername();
  console.log(`Welcome to the File Manager, ${userName}!`);
}