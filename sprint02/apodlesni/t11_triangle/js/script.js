function traIn () {
const n = prompt ('Number:')
let text1 = "";
let text2 = "";
for (let i = 0; i < n; i++) {
    text2 +="*"
    text1 += `${text2}\n`;
}
alert (text1);
}
traIn ();