export const getCurrentDir = () => {
  const currentDir = process.cwd();
  console.log(`You are currently in ${currentDir}`)
}