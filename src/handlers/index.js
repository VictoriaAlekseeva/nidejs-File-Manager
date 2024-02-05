import { up } from './up.js';
import { cd } from './cd.js';
import { ls } from './ls.js';
import { cat } from './cat.js';
import { add } from './add.js';
import { rn } from './rn.js';
import { cp } from './cp.js';
import { mv } from './mv.js';
import { rm } from './rm.js';
import { osData } from './osData.js';
import { calculateHash } from './calculateHash.js';
import { compress } from './compress.js';
import { decompress } from './decompress.js';
import { invaildInput } from '../constants/constants.js';

export const commandHandler = async (input) => {
  const formattedInput = input.trim();
  switch (formattedInput.split(' ')[0]) {
    case 'up':
      up();
      break;

    case '':
      break;

    case 'cd':
      cd(formattedInput);
      break;

    case 'ls':
      await ls();
      break;

    case 'cat':
      await cat(formattedInput);
      break;

    case 'add':
      await add(formattedInput);
      break;

    case 'rn':
      await rn(formattedInput);
      break;

    case 'cp':
      await cp(formattedInput);
      break;

    case 'mv':
      await mv(formattedInput);
      break;
    case 'rm':
      await rm(formattedInput);
      break;
    case 'os':
      osData(formattedInput);
      break;
    case 'hash':
      await calculateHash(formattedInput);
      break;
    case 'compress':
      await compress(formattedInput);
      break;
    case 'decompress':
      await decompress(formattedInput);
      break;
    default:
      invaildInput();
  }

}