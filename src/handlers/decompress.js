import path from 'path';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';
import { open } from 'fs/promises';
import { existsSync } from 'fs';

export const decompress = async (input) => {

  try {
    const sourcePath = input.split(' ')[1];
    const destPath = input.split(' ')[2];

    const sourceFileName = path.win32.basename(sourcePath);
    const sourceFileNameExtention = path.extname(sourceFileName);
    const brotliFileName = sourceFileName.slice(0, -3);
    const destFilePath = path.join(destPath, brotliFileName);

    if (sourceFileNameExtention !== '.br') throw new Error('Invalid input: Brotli compressed file has to have .br extention');
    if (!existsSync(sourcePath)) throw new Error('Invalid input: no such file');
    if (!existsSync(destPath)) throw new Error('Invalid input: no such directory');
    if (existsSync(destFilePath)) throw new Error('Invalid input: file already exists');

    const sourceStream = await open(sourcePath, 'r');
    const destStream = await open(destFilePath, 'wx');

    const brotli = createBrotliDecompress();
    const source = sourceStream.createReadStream(sourcePath);
    const destination = destStream.createWriteStream(destFilePath);

    await pipeline(source, brotli, destination);
  } catch (err) {
    if (err.code === undefined) {
      console.error(err.message)
    } else throw new Error('Operation failed')
  }

}
