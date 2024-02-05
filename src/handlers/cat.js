import { open } from 'fs/promises';
import { existsSync } from 'fs';

import { getRelativaPath } from '../helpers/getRelativePath.js'

export const cat = async (input) => {

  try {
    const destFile = input.substring(4).trim();
    const pathToFile = getRelativaPath(destFile);

    if (!existsSync(pathToFile)) throw new Error('Invalid input: no such file');

    let data = ""
    const fd = await open(pathToFile);
    const readableStream = fd.createReadStream(pathToFile);
    readableStream.on("data", (chunk) => (data += chunk));
    readableStream.on("end", () => console.log(data));
    readableStream.on("error", (error) => console.error("Operation failed", error.message));
  } catch (err) {
    if (err.code === undefined) {
      console.error(err.message)
    } else throw new Error('Operation failed')
  }
};