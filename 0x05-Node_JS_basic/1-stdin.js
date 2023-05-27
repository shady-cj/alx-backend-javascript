console.log("Welcome to Holberton School, what is your name?");
const input = process.stdin.read();
process.stdin.on('end', () => {
    console.log(input)
})
if (input !== null) {
  console.log(`Your name is: ${input}`);
}
process.on('exit', () => {
  console.log('This important software is now closing');
})