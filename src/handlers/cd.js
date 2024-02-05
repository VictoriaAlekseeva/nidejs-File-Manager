import { existsSync } from 'fs';
import { getRelativaPath } from '../helpers/getRelativePath.js'

export const cd = (input) => {
  try {
    const destFolder = input.slice(3);
    const pathToFolder = getRelativaPath(destFolder);

    if (existsSync(pathToFolder)) {
      process.chdir(pathToFolder)
    } else throw new Error('Invalid input: no such directory');
  } catch (err) {
    console.error(err.message)
  }
}