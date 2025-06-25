function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const args = process.argv.slice(2);
const num = Number(args[0]);

if (isNaN(num)) {
  console.log(1);
} else {
  const n = Math.floor(num); // cast to integer
  console.log(factorial(n));
}

