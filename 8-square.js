const args = process.argv.slice(2);
const size = Number(args[0]);

if (!Number.isInteger(size) || args.length === 0) {
  console.log("Missing size");
} else if (size > 0) {
  let row = 0;
  while (row < size) {
    let line = "";
    let col = 0;
    while (col < size) {
      line += "X";
      col++;
    }
    console.log(line);
    row++;
  }
}
// if size <= 0, print nothing

