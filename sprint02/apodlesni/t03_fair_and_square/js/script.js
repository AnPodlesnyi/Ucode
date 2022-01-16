var numb = prompt ('Please enter a number:',2);

function getNumber() {
    alert ('Have chosen ' + numb);
    return numb;
}
getNumber();
let numb2 = getNumber(numb);

function countMySquare () {
    alert (numb2 ** 2);
}
countMySquare();

/*function getNumber() {
    var numb = prompt ('Please enter a number:',2);
    alert (numb);
    return alert;
}
getNumber();

function countMySquare (number) {
    alert (getNumber.numb());
    alert (numb ** 2);
}
countMySquare(); */