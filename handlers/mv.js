
import { open, unlink } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { basename, join } from 'path';

export const mv = async (input) => {

  const filePath = input.split(' ')[1];
  const copyDirPath = input.split(' ')[2];

  const fileName = basename(filePath);

  const fileToCopy = await open(filePath);
  const copyFile = await open(join(copyDirPath, fileName), 'wx');

  const readableStream = fileToCopy.createReadStream(filePath);
  const writableStream = copyFile.createWriteStream(copyFile);
  await pipeline(readableStream, writableStream);

  await unlink(filePath);

  console.log(`file ${filePath} moved to ${copyDirPath}`);
}