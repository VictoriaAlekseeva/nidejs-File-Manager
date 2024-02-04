import { rename } from 'fs/promises';
import { dirname, join, relative } from 'path';

export const rn = async (input) => {
  //!обрабытвать имена с пробелами?

  try {
    const currentFolder = process.cwd();
    const destFile = input.split(' ')[1];
    const newFileName = input.split(' ')[2];
    const relativePathToFile = relative(currentFolder, destFile);
    const pathToNewFile = join(dirname(relativePathToFile), newFileName)
    await rename(relativePathToFile, pathToNewFile);
    console.log(`File ${destFile} has been renamed to ${pathToNewFile}.`);
  } catch (err) {
    console.error(err);
  }
};
