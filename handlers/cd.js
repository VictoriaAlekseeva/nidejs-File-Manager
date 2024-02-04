import {relative} from 'path';
import { existsSync } from 'fs';

export const cd = (input) => {
  const currentFolder = process.cwd();
  const destFolder = input.split(' ')[1];
  const pathToFolder = relative(currentFolder, destFolder);

  if (existsSync(pathToFolder)) process.chdir(pathToFolder);

  console.log(`goToFolder: You are currently in ${process.cwd()}!!!!`)
  //! если нет папки выше или папка не существует, сделать вывод информации
}