const a = [1, 2, 3, 4, 5];
const b = [6, 1, 5, 2, 7, 8];

const res = new Map();
let count = 0;
for (let i = 0; i < a.length; i++) {
  res.set(a[i], 1);
}

for (let i = 0; i < b.length; i++) {
  if (res.has(b[i])) {
    count++;
  }
}
console.log(count);
