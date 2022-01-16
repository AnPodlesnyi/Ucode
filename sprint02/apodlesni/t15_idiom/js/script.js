function init(){
let numb;
const numRegex = /^([1-9]|1[0])$/;
numb = prompt('Please enter a number from 1 to 10','1');
    while(numRegex.test(numb)==false) {
        numb=prompt('Please enter a number from 1 to 10','1');
    }
    switch (numb) {
        case '1':
          alert( 'Back to square 1' );
          break;
        case '2':
          alert( 'Goody 2-shoes' );
          break;
        case '3':
        case '6':
          alert( 'Two\'s company, three\'s a crowd' );
          break;
        case '4':
        case '9':
            alert('Counting sheep');
            break;
        case '7':
            alert('Seventh heaven');
            break;
        case '8':
            alert('Behind the eight-ball');
            break;
        case '10':
            alert('Cheaper by the dozen');
            break;
      }
}
init()