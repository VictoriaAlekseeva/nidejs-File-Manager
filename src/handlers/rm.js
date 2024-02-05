import { unlink } from 'fs/promises';
import { existsSync } from 'fs';

export const rm = async (input) => {
  try {
    const filePath = input.slice(3).trim();
    if (!existsSync(filePath)) throw new Error('Invalid input: no such file or directory');
    await unlink(filePath);
    console.log(`File ${filePath} has been deleted.`);
  } catch (error) {
    console.error(error.message);
  }
};
