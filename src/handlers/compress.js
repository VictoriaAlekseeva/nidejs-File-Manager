import path from 'path';
import { existsSync } from 'fs';
import { createBrotliCompress } from 'zlib';
import { pipeline } from 'stream/promises';
import { open } from 'fs/promises';

export const compress = async (input) => {

  try {
    const sourcePath = input.split(' ')[1];
    const destPath = input.split(' ')[2];

    const sourceFileName = path.win32.basename(sourcePath);
    const brotliFileName = `${sourceFileName}.br`;
    const destFilePath = path.join(destPath, brotliFileName);

  if (!existsSync(sourcePath)) throw new Error('Invalid input: no such file');
  if (!existsSync(destPath)) throw new Error('Invalid input: no such directory');
  if (existsSync(destFilePath)) throw new Error('Invalid input: file already exists');

    const sourceStream = await open(sourcePath, 'r');
    const destStream = await open(destFilePath, 'wx');

    const brotli = createBrotliCompress();
    const source = sourceStream.createReadStream(sourcePath);
    const destination = destStream.createWriteStream(destFilePath);

    await pipeline(source, brotli, destination);

    console.log(`File ${sourceFileName} compressed into ${destPath} folder`)
  } catch (err) {
    if (err.code === undefined) {
      console.error(err.message)
    } else throw new Error('Operation failed')
  }

}
