import { existsSync } from 'fs';
import { getRelativaPath } from '../helpers/getRelativePath.js'

export const cd = (input) => {
  try {
    const destFolder = input.slice(3).trim();
    const pathToFolder = getRelativaPath(destFolder);

    if (existsSync(pathToFolder)) {
      process.chdir(pathToFolder)
    } else throw new Error('Invalid input: no such directory');
  } catch (err) {
    if (err.code === undefined) {
      console.error(err.message)
    } else console.error('Operation failed')
  }
}