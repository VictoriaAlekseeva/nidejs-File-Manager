import { rename } from 'fs/promises';
import { dirname, join } from 'path';
import { existsSync } from 'fs';
import { getRelativaPath } from '../helpers/getRelativePath.js'

export const rn = async (input) => {
  try {
    const destFile = input.split(' ')[1];
    const newFileName = input.split(' ')[2];

    const pathToFile = getRelativaPath(destFile);

    if (!existsSync(pathToFile)) throw new Error('Invalid input: no such file');
    
    const pathToNewFile = join(dirname(pathToFile), newFileName)
    await rename(pathToFile, pathToNewFile);
    console.log(`File ${destFile} has been renamed to ${pathToNewFile}.`);
  } catch (err) {
    console.error(err.message);
  }
};
