
import { open, unlink } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { basename, join } from 'path';
import {cp} from './cp.js'

export const mv = async (input) => {

  const filePath = input.split(' ')[1];
  const copyDirPath = input.split(' ')[2];

  await cp(input);

  await unlink(filePath);

  console.log(`file ${filePath} moved to ${copyDirPath}`);
}