function input() {
let str;
const strRegex = /^\b[a-z]{0,19}\b$/;
str = prompt('What animal is the superhero most similar to?','cat');
if (strRegex.test(str)===false) {
    alert ('Please enter a valid name, for example: Vasiliy.')
    return
}
let gend;
const gendRegex = /\bmale|female|other\b/;
gend = prompt('To enter gender: Is the superhero male or female?','other');
if (gendRegex.test(gend)===false) {
    alert ('Please enter a valid gender:male or female')
    return
}

let age;
const ageRegex = /^(\d){1,5}$/g;
age = prompt('How old is the superhero?');
if (ageRegex.test(age)===false) {
    alert ('Please enter a valid age, for example: 18')
}
function displaySuper() {
    if (str&&gend=='male'&&age>18) {
        let desd = "man";
        alert (`The superhero name is: ${str}-${desd}!`)
    } else if (str&&gend=='male'&&age<18) {
        let desd = 'boy';
        alert(`The superhero name is: ${str}-${desd}!`)
    } else if (str && gend =='female' && age<18) {
        let desd = 'girl';
        alert(`The superhero name is: ${str}-${desd}!`)
    } else if (str && gend =='female' && age>18) {
        let desd = 'woman';
        alert(`The superhero name is: ${str}-${desd}!`)
    } else if (str && gend =='other'&& age<18) {
        let desd = 'kid';
        alert(`The superhero name is: ${str}-${desd}!`)
    } else if (str&&gend==''&&age>18) {
        let desd = 'Hero';
        alert(`The superhero name is: ${str}-${desd}!`)
    }
}
displaySuper()
}
input()