import { open } from 'fs/promises';
import {relative} from 'path';

export const cat = async (input) => {

  const currentFolder = process.cwd();
  const destFolder = input.substring(4);
  const pathToFile = relative(currentFolder, destFolder);

  let data = ""
  const fd = await open(pathToFile);
  const readableStream = fd.createReadStream(pathToFile);
  readableStream.on("data", (chunk) => (data += chunk));
  readableStream.on("end", () => console.log(data));
  readableStream.on("error", (error) => console.log("Error", error.message));
};