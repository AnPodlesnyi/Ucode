var heroes = ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];
function firstElements(arr, n) {
    const newla = arr.slice(0,n);
    return newla;
}
console.log(firstElements(heroes, 5));
console.log(firstElements(heroes, 1));
console.log(firstElements(heroes, 3));
console.log(firstElements(heroes, 6));
console.log(firstElements(heroes, -1));