import path from 'path';
import { createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream/promises';
import { open } from 'fs/promises';

export const decompress = async (input) => {

  try {
    const sourcePath = input.split(' ')[1];
    const destPath = input.split(' ')[2];

    const sourceFileName = path.win32.basename(sourcePath);
    const sourceFileNameExtention = path.extname(sourceFileName);
    if (sourceFileNameExtention !== '.br') throw new Error('Brotli compressed file has to have .br extention');

    const brotliFileName = sourceFileName.slice(0, -3);
    const destFilePath = path.join(destPath, brotliFileName);
    console.log(sourceFileName, destFilePath);

    const sourceStream = await open(sourcePath, 'r');
    const destStream = await open(destFilePath, 'wx');

    const brotli = createBrotliDecompress();
    const source = sourceStream.createReadStream(sourcePath);
    const destination = destStream.createWriteStream(destFilePath);

    await pipeline(source, brotli, destination);
  } catch (err) {
    console.error(err)
  }

}
