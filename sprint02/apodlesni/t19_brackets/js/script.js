function checkBrackets(inStr) {
    if (typeof(inStr) !== 'string') {
        return -1;
    }
    let openCount = 0;
    let closeCount = 0; 
    const openregExp = /\(/;
    const closeregExp = /\)/;   
    if (openregExp.test(inStr) && closeregExp.test(inStr)) {
        for (let i = 0; i < inStr.length; i++) {
            if (inStr[i] === '(') {
                openCount++;
                continue;
            }
            if (inStr[i] === ')' && openCount > 0) {
                openCount--;
                continue;
            }
            else if (inStr[i] === '(' || inStr[i] === ')') {
                closeCount++;
            }   
        }
        return openCount + closeCount;
    }
    else {
        return -1; 
    }
}
console.log(checkBrackets('1)()(())2(()'));// 2
console.log(checkBrackets(NaN));// -1