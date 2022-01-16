let str;
    const strRegex = /^[a-z]+\s[a-z]+/;
    str = prompt('What is your name?', 'jhon doe');
     if (strRegex.test(str)===false) {
        alert('Wrong input!');
        console.log ('Wrong input!');
    } else {
        function toUpper(ram) {
            return ram
                .toLowerCase()
                .split(' ')
                .map(function(word) {
                    return word[0].toUpperCase() + word.substr(1);
                })
                .join(' ');
             }
        alert(toUpper('Welcom ' + str + '!'));
        console.log(toUpper('Welcom ' + str + '!'));
    }