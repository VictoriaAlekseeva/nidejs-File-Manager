import os from 'os';
import { invaildInput } from '../constants/constants.js';

export const osData = (input) => {

  const command = input.slice(3).trim();

  switch (command) {
    case '--EOL':
      console.log('os.EOL: ', os.EOL);
      break;
    case '--cpus':
      const cpuInfo = os.cpus();
      cpuInfo.map(item => item.speed = `${(item.speed / 1000).toFixed(2)} GHz`);
      console.log('os.cpus: ', cpuInfo);
      break;
    case '--homedir':
      console.log('os.homedir: ', os.homedir());
      break;
    case '--username':
      console.log('os.userInfo: ', os.userInfo().username);
      break;
    case '--architecture':
      console.log('os.architecture: ', os.arch());
      break;
    default:
      invaildInput();
  }
}