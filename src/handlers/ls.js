import { readdir } from 'fs/promises';

export const ls = async () => {
  try {
    const currentDir = process.cwd();
    const folderContent = await readdir(currentDir, { withFileTypes: true });
    const folderList = folderContent.reduce((acc, item) => {
      item.isFile() ? acc.push({Name: `${item.name}`, Type: 'file'}) : acc.push({Name: `${item.name}`, Type: 'directory'});
      return acc
    }, []);
    const sortedFolderList = folderList.sort((a, b) => a.Name.toUpperCase().localeCompare(b.Name.toUpperCase())).sort((a, b) => a.Type.localeCompare(b.Type));
    console.log(`List of content in the ${currentDir} folder:`)
    console.table(sortedFolderList);
  } catch (err) {
    console.error(err);
  }
};
