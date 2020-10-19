const n = 20;
const arr = [];
for (let i = 2; i <= n; i++) {
  arr[i - 2] = i;
}
for (let i = 2; i < n; i++) {
  const filtered = arr.filter((n) => n % i === 0);
  for (let j = 1; j < filtered.length; j++) {
    arr.splice(arr.indexOf(filtered[j]), 1);
  }
}
console.log(arr);
