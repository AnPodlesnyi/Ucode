//проверка на локал 
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
let Hour = today.getHours();
let Minutes = today.getMinutes();
let Seconds = today.getSeconds();
today = '[' + dd + '.' + mm + '.' + yyyy + ', ' + Hour + ":" + Minutes + ':' + Seconds + ']'
function checkItem() {
  let conta = localStorage.key(input)
  let user = localStorage;
  let pElement = document.createElement("p");
  if (user != "") {
    const values = Object.values(user);
    values.forEach(value => {
      setMess(value, today)
      console.log(value);
    });
    console.log(user)

  } else {
    pElement.textContent == ('\[Empty\]')
  }
}
checkItem()
//вывод локал 
function setItem() {
  let notes_v = document.getElementById('notes_v');
  let input = document.getElementById('input').value;
  let pElement = document.createElement("p");
  let regex = /^\s*$/;
  localStorage.setItem(input, input);
  let conta = localStorage.getItem(input);
  if (regex.test(input)) {
    alert('It\'s empty. Tryto input something in "Text input"');
    notes_v.innerHTML = " ";
    pElement.textContent = ('\[Empty\]');
  } else {
    setMess(conta, today)
  }
}
// удалить локал
function removeItem() {
  var cookies = document.cookie.split(";");
  if (notes_v != '') {
    if (confirm('Areyou sure?') == true) {
      localStorage.clear()
      notes_v.innerHTML = "\[Empty\]";
    }
  }
}


function setMess(mess, day) {
  notes_v.insertAdjacentHTML('beforeend', `<div class="${ran}"> -->${mess} ${day}</div>`);
}
var ran = Math.random()