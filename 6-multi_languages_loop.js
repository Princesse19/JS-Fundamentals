const words = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

let i = 0;
let lines = "";

while (i < words.length) {
  lines += words[i] + "\n";
  i++;
}

console.log(lines);

