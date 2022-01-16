let beginRange;
let endRange;
const numRegex = /^[1-9][0-9]?$|^100$/;
const numRegex2 = /^(?:\d\,?)+$/;
while (numRegex.test(beginRange) == false) {
    beginRange = + prompt (`Please enter a numbers for the beginning and end of a rang 1 to 100`, `1`);
}
while (numRegex.test(endRange) == false) {
    endRange = + prompt(`Please enter a numbers for the beginning and end of a rang 1 to 100`, `100`);
}
function checkDivision(beginRange, endRange) {
    for (let i = beginRange; i <= endRange; i++) {
        if (i % 2 == 0 && i % 10 == 0 && i % 3 == 0 ) {
            console.log(`${i} - is even, multiple of 3, a multiple of10`);
        } else if (i % 3 == 0 ) {
            console.log(`${i} -  multiple of 3`);
        }else if (i % 2) {
            console.log(`${i} - `);
        } else if (i % 2 == 0) {
            console.log(`${i} - is even`);
        } 
    }
}
checkDivision(beginRange, endRange);