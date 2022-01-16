let nim = prompt ('Number?')
var res1 = '';
var i = 1;
do {
    res1 +=`${nim} * ${i} = ` + nim * i +'\n' ;
    i++
} while (i<10)
alert (res1);
