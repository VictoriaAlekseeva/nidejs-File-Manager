export function getUsername () {
  const username = process.argv.slice(2).find(arg => arg.startsWith('--username=')).split('=')[1];
  return username
}