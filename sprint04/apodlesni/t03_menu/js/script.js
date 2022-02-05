
const salads = new Map([
    ['greek salad', 5.99],
    ['caesar salad', 7.99],
]);

const main_dishes = new Map([
    ['margherita pizza', 12.50],
    ['tomato soup', 6.99],
    ['burger', 10.00]
]);

const desserts = new Map([
    ['cheesecake', 4.99],
    ['chocolate ice-cream', 2.50],
    ['fruit Salad', 3.99]
]);

const drinks = new Map([
    ['lemonade', 3.20],
    ['green tea', 1.50],
    ['coffe', 1.99]
])

const menu = new Map([
    ['salads', salads],
    ['main dishes', main_dishes],
    ['desserts', desserts],
    ['drinks', drinks]
]);

console.log(menu);
const contr_sald = document.getElementsByClassName('contr_sald');

let elem = document.querySelector('#contr');
let render = '<h1>Menu</h1>';
for (let sub of menu.keys()) {
    render += `<div class="contr_sald"><div class="sald">${toUpper(sub)}</div>`;
    for (let item of menu.get(sub).entries()) {
        render += `<div class="block"><div class="nazv">${toUpper(item[0])}</div><div class="price">$ ${new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2 }).format(item[1])}</div></div>`;
    }
    render += '</div>';
}
elem.innerHTML = render;
function toUpper(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function (word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
}