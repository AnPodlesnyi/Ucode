// button activ
let properties = document.getElementById("properties");
let head = document.getElementById("head");
properties.innerHTML = `<button class="mag">do magic</button>`;
let mag = document.getElementsByClassName("mag");
let say = document.getElementsByClassName("say");
let transform = document.getElementsByClassName("transform");
let howll = document.getElementsByClassName("howl");

function changeStatus() {
  let btns = document.getElementsByClassName("protoBtn");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      let name = this.innerText.split(' ', 1);
      if (name == "HUMAN") {
        creatProto(human);
        magicChe(human);
        magicMag(human);
      }
      if (name == "DOG") {
        creatProto(dog);
        magicChe(dog);
        magicMag(dog);
      }
      if (name == "VAMPIRE") {
        creatProto(vampir);
        magicChe(vampir);
        magicMag(vampir);
      }
      if (name == 'NO') {
        head.src = magician._getPortrait();
        properties.innerHTML = `<button class="mag">do magic</button>`;
        magicMag(magician);
      }
      if (name == "WEREWOLF") {
        creatProto(werewolf);
        magicChe(werewolf);
        magicMag(werewolf);
        transForm(werewolf);
      }
    });

  }
}

// say
function magicChe(prot) {
  for (let i = 0; i < say.length; i++) {
    say[i].addEventListener("click", function () {
      let name = this.innerText;
      prot.hello()
    });
  }
}
//magic
function magicMag(prot) {
  for (let i = 0; i < mag.length; i++) {
    mag[i].addEventListener("click", function () {
      let name = this.innerText;
      prot.domagic()
    });
  }
}

function transForm(prot) {
  for (let i = 0; i < transform.length; i++) {
    transform[i].addEventListener("click", function () {
      let name = this.innerText;
      console.log(name)
      if (name == 'TRANSFORM') {
        head.src = './assets/images/werewolf.png';
        properties.innerHTML =
          `<button class="mag">do magic</button><br>
    <button class="say">say hello</button><br>
    <button class="transform">transform</button><br>
    <button class="howl">Howl</button><br>
    name: ` + prot.name + `<br>` +
          `age: ` + prot.age + `<br>` +
          `species: ` + prot.species + `<br>` +
          `job: ` + prot.job;
        hoWl(prot);
        magicChe(werewolf);
        magicMag(werewolf);
      }
    });
  }
};
function hoWl(prot) {
  for (let i = 0; i < howll.length; i++) {
    howll[i].addEventListener("click", function () {
      let name = this.innerText;
      prot.howl()
    });
  }
}
// proto

class Creature {
  constructor(name, age, species, _portrait) {
    this.name = name,
      this.age = age,
      this.species = species,
      this._portrait = _portrait
  }
  hello() {
    console.log(`Hi, my name is ${this.name}`);
  }
  domagic() {
    console.log(`ABRACADABRA
    The prototype of ${this.name} is `);
    console.log(Object.getPrototypeOf(this));
  }
}

class Human extends Creature {
  constructor(name, age, species, job, _portrait) {
    super(name, age, species, _portrait)
    this.name = name,
      this.age = age,
      this.species = species,
      this.job = job,
      this._portrait = _portrait
  }
}
const human = new Human("Linda", 22, "human", "doctor", "./assets/images/human.png")

class Werewolf extends Human {
  constructor(name, age, species, job, _portrait) {
    super(name, age, species, _portrait)
    this.name = name,
      this.age = age,
      this.species = species,
      this.job = job,
      this._portrait = _portrait
  }
  howl() {
    console.log('ARH-WOOOOOOOOOOOOOOOOOOOO')
  }
}

let werewolf = new Werewolf("Linda", 22, "werewolf", "doctor", "./assets/images/human.png")

Object.assign(Werewolf.prototype, Creature)

class Dog extends Creature {
  constructor(name, age, species, color, _portrait) {
    super(name, age, species, _portrait)
    this.name = name,
      this.age = age,
      this.species = species,
      this._portrait = _portrait,
      this.color = color
  }
}
let dog = new Dog("Fluffy", 3, "dog", "brown", "./assets/images/dog.png")

class Vampire extends Human {
  constructor(name, age, species, _portrait, job, title) {
    super(name, age, species, _portrait, job)
    this.name = name,
      this.age = age,
      this.species = species,
      this._portrait = _portrait,
      this.job = job,
      this.title = title
  }
}
let vampir = new Vampire("Vlad", 915, "vampire", "./assets/images/vampire.png", "unemployed", "count");
/* 
  your code
*/
const Obj = new Object()
const magician = {
  name: undefined,
  _hat: './assets/images/hat.png',
  _getPortrait() {
    if (this._portrait) return this._portrait;
    else return './assets/images/magician.png';
  },
  domagic() {
    console.log(`ABRACADABRA
    The prototype of ${this.name} is `);
    console.log(Object.getPrototypeOf(this));
  }
}
magicMag(magician)
/* 
  your code
*/
function creatProto(pris) {
  if (pris.hasOwnProperty('job')) {
    head.src = pris._portrait;
    properties.innerHTML =
      `<button class="mag">do magic</button><br>
    <button class="say">say hello</button><br>
    name: ` + pris.name + `<br>` +
      `age: ` + pris.age + `<br>` +
      `species: ` + pris.species + `<br>` +
      `job: ` + pris.job
  }
  if (pris.hasOwnProperty('color')) {
    head.src = pris._portrait;
    properties.innerHTML =
      `<button class="mag">do magic</button><br>
    <button class="say">say hello</button><br>
    name: ` + pris.name + `<br>` +
      `age: ` + pris.age + `<br>` +
      `species: ` + pris.species + `<br>` +
      `color: ` + pris.color
  }
  if (pris.hasOwnProperty('title')) {
    head.src = pris._portrait;
    properties.innerHTML =
      `<button class="mag">do magic</button><br>
    <button class="say">say hello</button><br>
    name: ` + pris.name + `<br>` +
      `age: ` + pris.age + `<br>` +
      `species: ` + pris.species + `<br>` +
      `job: ` + pris.job + `<br>` +
      `title: ` + pris.title
  }
  if (pris.species === 'werewolf') {
    head.src = pris._portrait;
    properties.innerHTML =
      `<button class="mag">do magic</button><br>
    <button class="say">say hello</button><br>
    <button class="transform">transform</button><br>
    name: ` + pris.name + `<br>` +
      `age: ` + pris.age + `<br>` +
      `species: ` + 'human' + `<br>` +
      `job: ` + pris.job
  }
}