import os from 'os';


export const osData = async (input) => {

  const command = input.split(' ')[1];

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
  }
}