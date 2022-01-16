function init() {
let numb;
const numRegex = /[1-4]/;
numb = prompt('Please enter a number from 1 to 4','1')
    if (numRegex.test(numb)===true) { 
    } else {
        alert('Wrong input');
    }
    function calc(){
        if (numb==='1'){
            alert(`${numb}` * 2 / `a`);
        } else if (numb==='2'){
            alert(`${numb}`-`${numb}`/ 0);
        } else if (numb==='3'){
            alert(0*Infinity)
        } else if (numb==='4'){
            alert(`${numb}` * 40000000 == Infinity);
        }
    }
    calc()
}
init()