const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
arr.sort(function (a, b) {
    arr.length;
  return a % 2 - b % 2 || (a%1 ? b-a : a-b);
});
console.log(arr);