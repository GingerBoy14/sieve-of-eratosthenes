const range = 20;
const arr = Array.from({ length: range }, (_, i) => i + 2);
arr.forEach((i) =>
  arr
    .filter((n) => n % i === 0)
    .slice(1)
    .forEach((n) => arr.splice(arr.indexOf(n), 1))
);
console.log(arr);
