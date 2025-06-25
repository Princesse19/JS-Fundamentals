const args = process.argv.slice(2);
const x = Number(args[0]);

if (!Number.isInteger(x) || args.length === 0) {
  // Missing or invalid number
  console.log("Missing number of occurrences");
} else if (x > 0) {
  // Only print if positive number
  let count = 0;
  while (count < x) {
    console.log("C is fun");
    count++;
  }
}
// If x <= 0, print nothing (no else needed)


