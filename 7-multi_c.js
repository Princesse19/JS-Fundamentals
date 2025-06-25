const args = process.argv.slice(2);
const x = Number(args[0]);

if (!Number.isInteger(x) || x <= 0) {
  console.log("Missing number of occurrences");
} else {
  let count = 0;
  while (count < x) {
    console.log("C is fun");
    count++;
  }
}

