function add(a, b) {
  return a + b;
}

const args = process.argv.slice(2);
const a = Number(args[0]);
const b = Number(args[1]);

if (isNaN(a) || isNaN(b)) {
  console.log("NaN");
} else {
  console.log(add(a, b));
}

