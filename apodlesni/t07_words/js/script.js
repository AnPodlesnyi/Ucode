
const obj = {
    words: 'newspapers newspapers  books magazines'
  };
  function addWords(obj,wrds) {
    for (var key in obj) {
      var res = obj[key];
      var nameList = res.replace(/  +/g, ' ');
      let ar = nameList.split(' ');
      let removed = ar.splice(4,0,wrds);
      let are = ar.toString();
      let areres = are.replace(/[, ]+/g, " ");
      let neware = areres.replace(/\s+(\S+)$/);
      let arra = areres.replace(/\b(\w+)\W*$/, " ");
      let newarre = arra.replace(/^\S+\s/g, " ")
      var nameList1 = newarre.replace(/^\s{1,}|\s\s+$/g, '');
      obj.words = nameList1;
    }
  }
  function removeWords(obj, wrds) {
    for (var key in obj) {
      var res = obj[key];
      var nameList = res.replace(/  +/g, ' ');
      let ar = nameList.split(' ');
      let removed = ar.splice(4,0,wrds);
      let are = ar.toString();
      let areres = are.replace(/[, ]+/g, " ");
      let areres1= areres.split(' ');
      var removed1 = areres1.splice(areres1.length - 5, 2);
      let reare = removed1.toString();
      let are1 = reare.replace(/[, ]+/g, " ");
      obj.words = are1;
    }
  }
  function changeWords(obj, oldWrds, newWrds){
    for (var key in obj) {
      var res = obj[key];
      var nameList = res.replace(/  +/g, ' ');
      let ar = nameList.split(' ');
      let removed = ar.splice(0,2,oldWrds,newWrds);
      var removed1 = ar.splice(0, 1)
      let ar1 = ar.toString();
      obj.words = ar1;
    }
  }
  console.log(obj); // {words: "newspapers newspapers  books magazines"}
  addWords(obj, 'radio newspapers   ');
  console.log(obj); // {words: "newspapers books magazines radio"}
  
  removeWords(obj, 'newspapers   radio');
  console.log(obj); // {words: "books magazines"}
  
 changeWords(obj, 'books radio  magazines', 'tv internet');
 console.log(obj); // {words: "tv internet"}