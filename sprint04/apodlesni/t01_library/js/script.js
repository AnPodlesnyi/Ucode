ActivKlick()
class Books {
  constructor(title, auhor, image, image_attribution, description, description_attribution, genres, genres1) {
    this.title = title,
      this.auhor = auhor,
      this.image = image,
      this.image_attribution = image_attribution,
      this.description = description,
      this.description_attribution = description_attribution,
      this.genres = genres,
      this.genres1 = genres1
  }
}
class Books3 extends Books {
  constructor(title, auhor, image, image_attribution, description, description_attribution, genres, genres1, genres2) {
    super(title, auhor, image, image_attribution, description, description_attribution, genres, genres1, genres2)
    this.title = title,
      this.auhor = auhor,
      this.image = image,
      this.image_attribution = image_attribution,
      this.description = description,
      this.description_attribution = description_attribution,
      this.genres = genres,
      this.genres1 = genres1,
      this.genres2 = genres2
  }
}
class Books4 extends Books {
  constructor(title, auhor, image, image_attribution, description, description_attribution, genres, genres1, genres2, genres3) {
    super(title, auhor, image, image_attribution, description, description_attribution, genres, genres1, genres2, genres3)
    this.title = title,
      this.auhor = auhor,
      this.image = image,
      this.image_attribution = image_attribution,
      this.description = description,
      this.description_attribution = description_attribution,
      this.genres = genres,
      this.genres1 = genres1,
      this.genres2 = genres2,
      this.genres3 = genres3
  }
}
class Books5 extends Books {
  constructor(title, auhor, image, image_attribution, description, description_attribution, genres, genres1, genres2, genres3, genres4) {
    super(title, auhor, image, image_attribution, description, description_attribution, genres, genres1, genres2, genres3)
    this.title = title,
      this.auhor = auhor,
      this.image = image,
      this.image_attribution = image_attribution,
      this.description = description,
      this.description_attribution = description_attribution,
      this.genres = genres,
      this.genres1 = genres1,
      this.genres2 = genres2,
      this.genres3 = genres3,
      this.genres4 = genres4
  }
}

const booksFavorite = new Set();

const books0 = new Books4(
  "Alice's Adventures in Wonderland",
  "by Lewis Carroll 1865",
  "https://upload.wikimedia.org/wikipedia/commons/e/e2/Alice%27s_Adventures_in_Wonderland_-_Carroll%2C_Robinson_-_S008_-_%27Off_with_her_head%21%27.jpg",
  "Charles Robinson, Public domain, via Wikimedia Commons",
  "Alice's Adventures in Wonderland, widely beloved British children's book by Lewis Carroll, published in 1865. With its fantastical tales and riddles, it became one of the most popular works of English-language fiction. It was notably illustrated by British artist John Tenniel. The story centres on Alice, a young girl who falls asleep in a meadow and dreams that she follows the White Rabbit down a rabbit hole. She has many wondrous, often bizarre adventures with thoroughly illogical and very strange creatures, often changing size unexpectedly.",
  "Bauer, P. and Lowne, . Cathy. \"Alice's Adventures in Wonderland.\" Encyclopedia Britannica, May 5, 2020.",
  "Fantasy",
  "Literary nonsense",
  "Children's literature",
  "Absurdist fiction"
)
const books1 = new Books5(
  "Dracula",
  "by Bram Stoker 1897",
  "https://upload.wikimedia.org/wikipedia/commons/b/bd/Dracula_-_Front_Cover_1919_Edition.jpg",
  "Holloway, Public domain, via Wikimedia Commons",
  "Dracula, Gothic novel by Bram Stoker, published in 1897, that was the most popular literary work derived from vampire legends and became the basis for an entire genre of literature and film. Dracula comprises journal entries, letters, and telegrams written by the main characters.",
  "Lohnes, K.. \"Dracula.\" Encyclopedia Britannica, April 8, 2021.",
  "Novel",
  "Horror fiction",
  "Gothic fiction",
  "Fantasy",
  "Epistolary novel"
)

const books2 = new Books5(
  "The Adventures of Tom Sawyer",
  "by Mark Twain 1876",
  "https://upload.wikimedia.org/wikipedia/commons/9/97/Adventures_of_Tom_Sawyer-pg040.png",
  "True Williams, Mark Twain, Public domain, via Wikimedia Commons",
  "Enjoy the story of Tom Sawyer as a mischievous young boy carries on under the watchful eye of his Aunt Polly. Mark Twain's Tom Sawyer is one part trickster, one escape artist and one part very lucky fellow! The Adventures of Tom Sawyer takes the reader along on a series of entertaining adventures and pranks while Tom's youthful romance with his sweetheart Becky Thatcher blooms in the background. The Adventures of Tom Sawyer is one of Mark Twain's most beloved works.",
  "Twain, Mark. \"The Adventures of Tom Sawyer.\" Short Stories and Classic Literature",
  "Novel",
  "Children's literature",
  "Humour",
  "Satire",
  "Adventure fiction"
)

const books3 = new Books4(
  "Little Women",
  "by Louisa May Alcott 1869",
  "https://upload.wikimedia.org/wikipedia/commons/e/e9/Boys_and_Girls_of_Bookland_Little_Women.jpg",
  "Jessie Willcox Smith, Public domain, via Wikimedia Commons",
  "Little Women, in full Little Women; or, Meg, Jo, Beth, and Amy, novel for children by Louisa May Alcott, published in two parts in 1868 and 1869. Her sister May illustrated the first edition. It initiated a genre of family stories for children. Meg, Jo, Beth, and Amy March are raised in genteel poverty by their loving mother, Marmee, in a quiet Massachusetts town while their father serves as an army chaplain during the American Civil War.",
  "Britannica, T. Editors of Encyclopaedia. \"Little Women.\" Encyclopedia Britannica, June 7, 2020.",
  "Novel",
  "Fiction",
  "Children's literature",
  "Comedy"
)

const books4 = new Books3(
  "Frankenstein",
  "by Mary Shelley 1818",
  "https://upload.wikimedia.org/wikipedia/commons/e/e6/Frontispiece_to_Frankenstein_1831.jpg",
  "Theodore Von Holst (1810-1844), Public domain, via Wikimedia Commons",
  "Mary Shelley’s best-known book is Frankenstein; or, The Modern Prometheus (1818, revised 1831), a text that is part Gothic novel and part philosophical novel; it is also often considered an early example of science fiction. It narrates the dreadful consequences that arise after a scientist has artificially created a human being. (The man-made monster in this novel inspired a similar creature in numerous American horror films.)",
  "Kuiper, K.. \"Mary Wollstonecraft Shelley.\" Encyclopedia Britannica, January 28, 2021.",
  "Gothic novel",
  "Horror fiction",
  "Science fiction"
)

const books5 = new Books(
  "The Time Machine",
  "by H. G. Wells 1895",
  "https://upload.wikimedia.org/wikipedia/commons/7/71/The_Time_Machine_by_Norman_Saunders.jpg",
  "Norman Saunders (1907-1989), Public domain, via Wikimedia Commons",
  `The Time Machine is the novel that gave us the concept of—and even the word for—a \"time machine.\" While it’s not Wells' first story involving time travel, it is the one that most fully fleshes out the concept of a device that can send a person backwards and forwards in time with complete precision. Time machines have since become a staple of the science fiction and fantasy genres, making The Time Machine one of the most deeply influential science fiction novels of the era.`,
  "The time machine. (n.d.). Standard Ebooks: Free and liberated ebooks, carefully produced for the true book lover.",
  "Science fiction",
  "Dystopian Fiction",
)

function creatBooks(pris) {
  if (pris.hasOwnProperty('genres1')) {
    head_h1.innerHTML = pris.title
    head_year.innerHTML = pris.auhor;
    genres.innerHTML = `
        <div class="gen">${pris.genres}</div>
        <div class="gen">${pris.genres1}</div>
        `;
    text.innerHTML = pris.description;
    pod_text.innerHTML = pris.description_attribution;
    img_left.src = pris.image;
    heart.innerHTML = '&#10084;';
    imj_text.innerHTML = pris.image_attribution;
  }
  if (pris.hasOwnProperty('genres2')) {
    head_h1.innerHTML = pris.title
    head_year.innerHTML = pris.auhor;
    genres.innerHTML = `
        <div class="gen">${pris.genres}</div>
        <div class="gen">${pris.genres1}</div>
        <div class="gen">${pris.genres2}</div>
        `;
    text.innerHTML = pris.description;
    pod_text.innerHTML = pris.description_attribution;
    img_left.src = pris.image;
    heart.innerHTML = '&#10084;';
    imj_text.innerHTML = pris.image_attribution;
  }
  if (pris.hasOwnProperty('genres3')) {
    head_h1.innerHTML = pris.title
    head_year.innerHTML = pris.auhor;
    genres.innerHTML = `
    <div class="gen">${pris.genres}</div>
    <div class="gen">${pris.genres1}</div>
    <div class="gen">${pris.genres2}</div>
    <div class="gen">${pris.genres3}</div>
    `;
    text.innerHTML = pris.description;
    pod_text.innerHTML = pris.description_attribution;
    img_left.src = pris.image;
    heart.innerHTML = '&#10084;';
    imj_text.innerHTML = pris.image_attribution;
  }
  if (pris.hasOwnProperty('genres4')) {
    head_h1.innerHTML = pris.title
    head_year.innerHTML = pris.auhor;
    genres.innerHTML = `
        <div class="gen">${pris.genres}</div>
        <div class="gen">${pris.genres1}</div>
        <div class="gen">${pris.genres2}</div>
        <div class="gen">${pris.genres3}</div>
        <div class="gen">${pris.genres4}</div>
        `;
    text.innerHTML = pris.description;
    pod_text.innerHTML = pris.description_attribution;
    img_left.src = pris.image;
    heart.innerHTML = '&#10084;';
    imj_text.innerHTML = pris.image_attribution;
  }
}

// создать список книг
const knigs = new Set();
knigs.add(books0.title);
knigs.add(books1.title);
knigs.add(books2.title);
knigs.add(books3.title);
knigs.add(books4.title);
knigs.add(books5.title);
console.log(knigs)

function createListOfBrands(prods) {
  let html = '';
  let list = document.getElementById('books');
  let temp = [];
  const heart = document.getElementById('heart')
  heart.innerHTML = '&#10084;';
  prods.forEach(el => temp[el]++);
  html += `
    <button class="knig activs"></button>
    `;

  for (let key in temp) {
    html += `
    <button class="knig">${key}</button>
    `;
  }
  list.innerHTML = html;
}
createListOfBrands(knigs)

const books_img = document.getElementById("books_img");
const head_h1 = document.getElementById("head_h1");
const head_year = document.getElementById("head_year");
const genres = document.getElementById("genres");
const text = document.getElementById("text");
const pod_text = document.getElementById("pod_text");
const img_left = document.getElementById("img_left");
const imj_text = document.getElementById("imj_text");
const heart = document.getElementById('heart')

// --------------   отрисовка по книгам 

function ActivKlick() {
  let knig = document.getElementsByClassName("knig");
  for (let i = 0; i < knig.length; i++) {
    knig[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("activs");
      current[0].className = current[0].className.replace(" activs", "");
      this.className += " activs";
      let name = this.innerText;
      if (name == "Alice's Adventures in Wonderland") {
        addHeart(name)
        creatBooks(books0)
      }
      if (name == "Dracula") {
        addHeart(name)
        creatBooks(books1)
      }
      if (name == "The Adventures of Tom Sawyer") {
        addHeart(name)
        creatBooks(books2)
      }
      if (name == "Little Women") {
        addHeart(name)
        creatBooks(books3)
      }
      if (name == "Frankenstein") {
        addHeart(name)
        creatBooks(books4)
      }
      if (name == "The Time Machine") {
        addHeart(name)
        creatBooks(books5)
      }
    });
  }
}
ActivKlick()


//-----------   кнопка избраное  

let one = document.getElementsByClassName("one");
for (let i = 0; i < one.length; i++) {
  one[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("activ");
    current[0].className = current[0].className.replace(" activ", "");
    this.className += " activ";
    let name = this.innerText;
    if (name == "Favorites") {
      genres.innerHTML = `Выберите книгу`;
      let list = document.getElementById('books');
      let books_body = document.getElementById('books_bod')
      list.innerHTML = `<button class="knig activs"></button>`
      head_h1.innerHTML = '';
      head_year.innerHTML = '';
      text.innerHTML = '';
      pod_text.innerHTML = '';
      img_left.src = '';
      imj_text.innerHTML = '';
      heart.innerHTML = '';
      createListOfBrands(favorSet)
      ActivKlick()
    }
    if (name == "All") {
      createListOfBrands(knigs)
      ActivKlick()
      genres.innerHTML = `Выберите книгу`;
      heart.innerHTML = '&#10084;';
    }
  });
}

// ----------сердечко of-on
const heart1 = document.getElementById('heart');
const favorSet = new Set;

function addHeart(pap) {
  heart1.addEventListener("click", function () {
    heart.style.color = "red";
    console.log(pap)
    favorSet.add(pap)
    console.log(favorSet)
    //addToFavorites(pap)
  });
}

function delHeart(pap) {
  heart1.addEventListener("click", function () {
    heart.style.color = "grey";
    console.log(pap)
    favorSet.clear()
  });
}