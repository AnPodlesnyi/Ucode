function total(addCount, addPrice, currentTotal){
 currentTotal = addCount * addPrice;
 return currentTotal
}
let sum = total(1, 0.1);
sum = total(1, 0.2, sum);
sum = total(1, 0.78, sum);
console.log(Number.parseFloat(sum).toFixed(2)); 
