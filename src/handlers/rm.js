import { unlink } from 'fs/promises';

export const rm = async (input) => {
  try {
    const filePath = input.split(' ')[1];
    await unlink(filePath)
    console.log(`File ${filePath} has been deleted.`);
  } catch (error) {
    console.error(error);
  }
};
