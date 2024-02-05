
import { open } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { basename, join } from 'path';
import { existsSync } from 'fs';

export const cp = async (input) => {

  try {
    const filePath = input.split(' ')[1];
    const copyDirPath = input.split(' ')[2];

    const fileName = basename(filePath);

    if (!existsSync(filePath) || !existsSync(copyDirPath)) throw new Error('Invalid input: no such file or directory');

    const fileToCopy = await open(filePath, 'r');
    const copyFile = await open(join(copyDirPath, fileName), 'wx');

    const readableStream = fileToCopy.createReadStream(filePath);
    const writableStream = copyFile.createWriteStream(copyFile);

    await pipeline(readableStream, writableStream);
  } catch (err) {
    console.error(err.message);
  }
}