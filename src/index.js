const n = 20;
const arr = Array.from({ length: n }, (_, i) => i + 2);
for (let i = 2; i < n; i++) {
  arr
    .filter((n) => n % i === 0)
    .slice(1)
    .forEach((n) => arr.splice(arr.indexOf(n), 1));
}
console.log(arr);
