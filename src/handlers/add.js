import { open } from 'fs/promises';

export const add = async (input) => {
  const newFileName = input.substring(4);
  const fd = await open(newFileName, 'wx');
}