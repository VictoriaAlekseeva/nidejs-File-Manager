export const up = () => {
  process.chdir('..');
  console.log(`You are currently in ${process.cwd()}!!!!`)
}