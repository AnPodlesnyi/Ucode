
let inputtext = document.getElementById('textInp');
let contreinerBody = document.getElementById('contreiner_body');
let coint = 0;
let answer = false;
let erorChatty = `I don't understand.`;

let textHello = ['HELLO', 'HI', 'ЗДРАВСТВУЙТЕ', 'ПРИВЕТ', 'ПРИВ', 'PRIV'];

function* generator(){
    yield 'Hello, I am C.H.A.T.T.Y.';
    yield `I believe I've already said it, but, sure, hello again!`;
    yield 'You are malfunctioning.';
    yield 'Your behavior is very suspicious.';
    yield 'I will not respond to that.'
}
let gen = generator();
console.log(gen.next().value)
let answer_hello = [
	'Hello, I am C.H.A.T.T.Y.',
	`I believe I've already said it, but, sure,<br> hello again!`,
	'You are malfunctioning.',
	'Your behavior is very suspicious.',
	'I will not respond to that.'
];

document.addEventListener('keydown', function(event) {
    if (event.code == 'Enter') {
        addMess();
      }
    });
  

function addMess(){
if(inputtext.value.length < 1){
    return
}

console.log(inputtext.value)
setMess(inputtext.value);
if(!answer) {
    answer = true;
    setTimeout(chatWat, 1000, inputtext.value);
}
inputtext.value = '';
}

function setMess(mess) {
	contreinerBody.insertAdjacentHTML('beforeend', `<div class="hi right"><div class="hello">${mess}</div></div>`);	
}

function setMessChat(text){
    contreinerBody.insertAdjacentHTML('beforeend', `<div class="cha"><div class="chatt" id="chatt">...</div></div>`)
	setTimeout(() => {
		document.querySelector('#chatt').innerHTML = text;
		answer = false;
		document.querySelector('#chatt').removeAttribute('id');
	}, 100 * text.length);
}


function chatWat(text) {
	

	if(helloCha(text)) {
		if(coint > 4){
			setMessChat(answer_hello[4]);
		} else {
			setMessChat(answer_hello[coint]);
		}
		coint++;
		return;
	} 
	setMessChat(erorChatty);
  }

  function helloCha(text) {
    for( let i = 0; i < textHello.length; i++) {
      if(text.toUpperCase().indexOf(textHello[i]) > -1) {

          return true;	
      }
  }
  return false;
}
