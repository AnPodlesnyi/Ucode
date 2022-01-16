let numb = 1212;
let bigInt = 13214832978594353405964378n;
let str = "sad sad";
let trueFalse = 4>1;
let nl = null;
let und = undefined;
let obj = Math;
let sym = Symbol();
let func = function(){};

alert(Object.keys({numb}) +' is '+ typeof(numb)+'\n'
+Object.keys({bigInt}) +' is '+typeof(bigInt)+'\n'
+Object.keys({str}) +' is '+typeof(str)+'\n'
+Object.keys({trueFalse}) +' is '+typeof(trueFalse)+'\n'
+Object.keys({nl})+' is '+typeof(nl)+'\n'
+Object.keys({und})+' is '+typeof(und)+'\n'
+Object.keys({obj})+' is '+typeof(obj)+'\n'
+Object.keys({sym})+' is '+typeof(sym)+'\n'
+Object.keys({func})+' is '+typeof(func));
