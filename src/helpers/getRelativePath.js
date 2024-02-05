import { relative } from 'path';

export const getRelativaPath = (destFolder) => {
  const currentFolder = process.cwd();
  const pathToFolder = relative(currentFolder, destFolder);

  return pathToFolder;
}