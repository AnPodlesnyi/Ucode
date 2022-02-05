function concat(str1, str2) {
    con.count = 0;
        if(arguments.length==2) {
            if(str2=='Spanish') {
                let an = `Hola, ${str1}!`;
                return an;
            }
            if (str2=='Italiano'){
                let ita =`Ciao, ${str1}!`;
                return ita;
            } 
            if (str2=='French'){
                let fre = `Bonjour, ${str1}!`
                return fre;
            }
            if (str2=='English'){
                let eng = `Hello, ${str1}!`
                return eng;
            } 
        }
        else {
            return con; 
        }   
        function con(){
            con.count++;
            str2 = prompt('Enter your country:','Spanish');
            return concat(str1,str2);
        }
}
let phrase1 = concat("space", "English");
let output = phrase1;
console.log(output); // Hello, space!

let phrase2 = concat("ucoder");
output = phrase2();
// a prompt appears. Enter "Spanish" into the prompt

console.log(output); // Hola, ucoder!
console.log(phrase2.count); // 1

output = phrase2();
// a prompt appears. Enter "Italiano" into the prompt

console.log(output); // Ciao, ucoder!

output = phrase2();
// a prompt appears. Enter "French" into the prompt

console.log(output); // Bonjour, ucoder!
console.log(phrase2.count); // 3

let phrase3 = concat("ucoder");
output = phrase3();
// a prompt appears. Enter "English" into the prompt

console.log(output); // Hello, ucoder!
console.log(phrase3.count); // 1
console.log(phrase2.count); // 3

/* Result in Console panel:
Hello, space!
Hola, ucoder!
1
Ciao, ucoder!
Bonjour, ucoder!
3
Hello, ucoder!
1
3
*/