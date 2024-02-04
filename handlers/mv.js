
import { cp } from './cp.js';
import { rm } from './rm.js';

export const mv = async (input) => {

  const filePath = input.split(' ')[1];
  const copyDirPath = input.split(' ')[2];

  await cp(input);

  await rm(input);

  console.log(`file ${filePath} moved to ${copyDirPath}`);
}