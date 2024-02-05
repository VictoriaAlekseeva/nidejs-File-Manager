import { rename } from 'fs/promises';
import { dirname, join } from 'path';
import { existsSync } from 'fs';
import { getRelativaPath } from '../helpers/getRelativePath.js'

export const rn = async (input) => {
  try {
    const destFile = input.split(' ')[1];
    const newFileName = input.split(' ')[2];

    const pathToFile = getRelativaPath(destFile);
    const pathToNewFile = join(dirname(pathToFile), newFileName);

    if (!existsSync(pathToFile)) throw new Error('Invalid input: no such file');
    if (existsSync(pathToNewFile)) throw new Error('Invalid input: file already exists')

    await rename(pathToFile, pathToNewFile);
    console.log(`File ${destFile} has been renamed to ${pathToNewFile}.`);
  } catch (err) {
    if (err.code === undefined) {
      console.error(err.message)
    } else throw console.error('Operation failed');
  }
};
