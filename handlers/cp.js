
import { open } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { relative, basename, join } from 'path';

export const cp = async (input) => {

  const filePath = input.split(' ')[1];
  const copyDirPath = input.split(' ')[2];

  const fileName = basename(filePath);

  const fileToCopy = await open(filePath, 'r');
  const copyFile = await open(join(copyDirPath, fileName), 'wx');

  const readableStream = fileToCopy.createReadStream(filePath);
  const writableStream = copyFile.createWriteStream(copyFile);

  await pipeline(readableStream, writableStream);
}