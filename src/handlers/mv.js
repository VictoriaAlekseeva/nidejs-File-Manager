import { existsSync } from 'fs';
import { cp } from './cp.js';
import { rm } from './rm.js';

export const mv = async (input) => {

  try {
    const filePath = input.split(' ')[1];
    const copyDirPath = input.split(' ')[2];

    if (!existsSync(filePath) || !existsSync(copyDirPath)) throw new Error('Invalid input: no such file or directory');

    await cp(input);

    await rm(input);

    console.log(`file ${filePath} moved to ${copyDirPath}`);
  } catch (err) {
    if (err.code === undefined) {
      console.error(err.message)
    } else throw new Error('Operation failed')
  }
}