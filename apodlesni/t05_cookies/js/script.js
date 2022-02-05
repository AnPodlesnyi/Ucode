function checkCookie() { //проверка на кукки
  let user = document.cookie;
  let pElement = document.createElement("p");
  pElement.id = 'coc';
  let notes_v = document.getElementById('notes_v');
  let newUser = user.split(';')
  console.log(newUser)

  if (user != "") {
    pElement.textContent = document.cookie;
    for (var i = 0; i < newUser.length; i++) {
      console.log(newUser[i])
      setMess(newUser[i])
    }

  } else {
    pElement.textContent = ('\[Empty\]')
    notes_v.appendChild(pElement);
    if (notes_v == '\[Empty\]') {
      notes_v.innerHTML = " ";
    }
  }
}
checkCookie()

function setCookie(name, cvalue, exdays) { //кукки создание
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 30));
  let notes_v = document.getElementById('notes_v');
  let input = document.getElementById('input').value;
  let pElement = document.createElement("p");
  let regex = /^\s*$/;
  let coc = document.getElementById('coc');
  name = input;
  cvalue = 'input';
  document.cookie = name + "=" + ";";

  function getCookie() { //кукки вывод
    if (regex.test(input)) {
      alert('It\'s empty. Tryto input something in "Text input"');
      pElement.textContent = ' ';
      notes_v.appendChild(pElement);
      console.log(coc)
    }
    else {
      setMess(name);
    }
  }
  getCookie()
}

function removeCookies() { //кукки удалить 
  var cookies = document.cookie.split(";");
  if (notes_v != '') {
    if (confirm('Areyou sure?') == true) {
      notes_v.innerHTML = "\[Empty\]";
    }
  }
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
}

function setMess(mess) {
  notes_v.insertAdjacentHTML('beforeend', `<div class="${ran}"> -->${mess}</div>`);
}
var ran = Math.random()