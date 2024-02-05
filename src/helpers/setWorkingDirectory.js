import { homedir } from 'os';
import { chdir } from 'process';

export const setWorkingDirectory = () => {
  let currentDir = homedir();
  chdir(currentDir);
}