let user = {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    email: document.getElementById('email').value
  };
  // Don't edit above this line
  
  let ageProf = {};

  
  save = ageSave(save);
  edit = editAge(edit);

  function ageSave(a) {
    return new Proxy(a, {
      apply(target, thisArg, args) {
        let id = args[0].previousElementSibling.id;
        let value = document.getElementById(args[0].previousElementSibling.id).value;
        if(!projarc(id, value)) {
          document.getElementById(id).value = ageProf[id];
          alert('Invalid value!');
        }
        target.apply(thisArg, args);
      }
    });
  }

  function editAge(a) {
    return new Proxy(a, {
      apply(target, thisArg, args) {
        ageProf[args[0].previousElementSibling.id] = document.getElementById(args[0].previousElementSibling.id).value;
        target.apply(thisArg, args);
      }
    });
  }



  function projarc(id, value) {
    if(id == 'name') {
      let regexp = /^[A-Za-zА-Яа-я\s]{2,}$/;
      if(!regexp.test(value)) {
        return false;
      }
      value = value.replace(/\s{2,}/g, ' ');
      value = value.replace(/^\s{1,}/, '');
      value = value.replace(/\s{1,}$/, '');
      let arr = value.split(' ');
      if(arr.length !== 2) {
        return false;
      }
      value = arr[0][0].toUpperCase() + arr[0].slice(1).toLowerCase() + ' ' + arr[1][0].toUpperCase() + arr[1].slice(1).toLowerCase();
      document.getElementById(id).value = value;
      return regexp.test(value);
      return false;
    }
    if(id == 'age') {
      let regexp = /^[1-9]\d{0,2}$/;
      return regexp.test(value);
    }
    if(id == 'email') {
      value = value.replace(/^\s{1,}/, '');
      value = value.replace(/\s{1,}$/, '');
      if(!(value.indexOf('@') > 0) || value.indexOf('@') == value.length - 1) {
        return false;
      }
      let arr = value.split('@');
      if(arr.length !== 2) {
        return false;
      }
      if(!(arr[1].indexOf('.') > 0)) {
        return false;
      }
      let regexp = /[0-9A-Za-z]/g;
      let regexp1 = /[-_.]/g;
      let result = [];
      result[0] = arr[0].replace(regexp, '');
      result[0] = result[0].replace(regexp1, '');
      result[1] = arr[1].replace(regexp, '');
      result[1] = result[1].replace(regexp1, '');
      if((result[0] + result[1]).length > 0) {
        return false;
      }
      return true;
    }
    return false;
  }
  
  

  // Don't edit below this line
  
  function edit(btn) {
    btn.innerHTML = 'save';
    btn.setAttribute('onclick', 'save(this)');
    const input = document.getElementById(btn.previousElementSibling.id);
    input.removeAttribute('disabled');
  }
  
  function save(btn) {
    btn.innerHTML = 'edit';
    btn.setAttribute('onclick', 'edit(this)');
    const input = document.getElementById(btn.previousElementSibling.id);
    input.setAttribute('disabled', 'true');
    user[input.id] = document.getElementById(input.id).value;
    document.getElementById(input.id).value = user[input.id];
  }
  