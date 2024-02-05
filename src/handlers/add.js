import { open } from 'fs/promises';

export const add = async (input) => {
  try {
    const newFileName = input.substring(4).trim();
    await open(newFileName, 'wx');
  } catch (err) {
    throw new Error('Operation failed')
  }
}