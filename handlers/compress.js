// import { dirname, join, basename, win32 } from 'path';
import path from 'path';
import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream/promises';
import { open } from 'fs/promises';

export const compress = async (input) => {

  const sourcePath = input.split(' ')[1];
  const destPath = input.split(' ')[2];

  const sourceFileName = path.win32.basename(sourcePath);
  const sourceFileDir = path.dirname(sourcePath);
  const brotliFileName = `${sourceFileName.split('.')[0]}.br`;
  const destFilePath = path.join(destPath, brotliFileName);
  console.log(sourceFileName, sourceFileDir, destFilePath)

  const sourceStream = await open(sourcePath, 'r');
  const destStream = await open(destFilePath, 'wx');

  const brotli = createBrotliCompress();
  const source = sourceStream.createReadStream(sourcePath);
  const destination = destStream.createWriteStream(destFilePath);

  await pipeline(source, brotli, destination);

}
