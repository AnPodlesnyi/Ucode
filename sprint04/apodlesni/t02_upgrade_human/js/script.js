let info = document.querySelector('#info');

let bob = {
    firstName: 'Боб',
    lastName: 'Губка',
    pants: 'Квадратные',
    age: 22,
    calories: 500,
}

class Bob {
    timer;
    sleep = 10;
    hero = false;
    eattime;
    eattimer = 10;
    sleepp = 'assets/images/sleep.jpeg'
    foto = 'assets/images/bob.jpeg';
    bang = 'assets/images/bang.jpeg';
    constructor(prop) {
        this.firstName = prop.firstName;
        this.lastName = prop.lastName;
        this.pants = prop.pants;
        this.age = prop.age;
        this.calories = prop.calories;
    }
    start() {
        this.timer = setInterval(() => {
            this.calories -= 200 / (100 * 60);
            document.querySelector('#calories').innerHTML = Math.floor(this.calories);
        }, 10);
    }
    sleepBob() {
        let sec = this.sleep;
        this._timer(sec);
        this._startSleep();
        setTimeout(() => {
            this._stopSleep();
        }, 1000 * sec);
    }

    _message(mes, id) {
        document.querySelector(id).innerHTML = mes;
    }

    startHero() {
        hero = true;
    }

    stopHero() {
        hero = false;
        document.querySelector('.bob').setAttribute('src', this.foto);
    }

    isHero() {
        return hero;
    }
    _hideButtons() {
        document.querySelector('#buttons').classList.toggle('hidden-buttons');
    }

    _timer(sec) {
        document.querySelector('#sleep-time').innerHTML = sec;
        let timerId = setInterval(() => {
            sec -= 1;
            document.querySelector('#sleep-time').innerHTML = sec;
        }, 1000);
        setTimeout(() => {
            this._hideButtons();
            clearInterval(timerId);
            document.querySelector('#f-title').classList.toggle('hidden-buttons');
        }, 1000 * sec);

    }
    _startSleep() {
        clearInterval(this.timer);
        this._hideButtons();
        document.querySelectorAll('.sleeppe').forEach(element => {
            element.setAttribute('style', 'display: block;');
        });
        document.querySelector('#f-title').classList.toggle('hidden-buttons');
        this._message("I'm sleeping!", '#f-message-1');
        this._message("Wakes up: ", '#f-message-2');

    }
    _stopSleep() {
        this.start();
        document.querySelectorAll('.sleeppe').forEach(element => {
            element.setAttribute('style', 'display: none;');
        });
    }
    feed() {
        if (this.calories > 500) {
            this.showMessage("I'm not HUNGRY!");
            return;
        }

        let sec = this.eattimer;
        this._timer(sec);
        this._startFeed();

        this.eattime = setInterval(() => {
            this.calories += 200 / (100 * 10);
            document.querySelector('#calories').innerHTML = Math.floor(this.calories);
        }, 10);
        setTimeout(() => {
            clearInterval(this.eattime);
            this._stopFeed();
        }, 1000 * sec);
        //this._startFeed();
    }
    _startFeed() {
        clearInterval(this.timer);
        this._hideButtons();
        document.querySelectorAll('.feed-title').forEach(element => {
            element.setAttribute('style', 'display: block;');
        });
        document.querySelector('#f-title').classList.toggle('hidden-buttons');
        this._message("Omm nom nom ..", '#f-message-1');
        this._message("Finish eating: ", '#f-message-2');
    }

    _stopFeed() {
        this.start();
        document.querySelectorAll('.feed-title').forEach(element => {
            element.setAttribute('style', 'display: none;');
        });
        if (this.calories < 500) {
            this.showMessage("I'm still HUNGRY!");
        }
    }
    showMessage(text) {
        let div = document.createElement('div');
        div.className = 'message_top';
        div.innerHTML = text;
        document.querySelector('#img').prepend(div);
        setTimeout(() => { div.remove() }, 3000);
    }
    stop() {
        document.querySelector('#hero-btn').setAttribute('style', 'display: block;');
        document.querySelector('#hero-buttons').setAttribute('style', 'display: none;');
    }
}

class SuperBob extends Bob {
    flyy = 10;
    fight = 3;
    foto = 'assets/images/super.jpeg';
    constructor(hm) {
        super({
            firstName: hm.firstName,
            lastName: hm.lastName,
            pants: hm.pants,
            age: hm.age,
            calories: hm.calories,
        });
        this.humanFoto = hm.foto;
        this._start();
    }

    fly() {
        this._hideButtons();
        this._timer(this.flyy);
        document.querySelector('#f-title').classList.toggle('hidden-buttons');
        this._message("I'm flying!", '#f-message-1');
        this._message("End fly: ", '#f-message-2');
    }
    fightWithEvil() {
        this._hideButtons();
        this._timer(this.fight);
        document.querySelector('#f-title').classList.toggle('hidden-buttons');
        this._message("Khhhh-chh... Bang-g-g-g...", '#f-message-1');
        this._message(" Evil is defeated! ", '#f-message-2');
        document.querySelector('.bang').setAttribute('style', 'display: block;');
    }
    _start() {
        document.querySelector('.bob').setAttribute('src', this.foto);
        document.querySelector('#hero-btn').setAttribute('style', 'display: none;');
        document.querySelector('#hero-buttons').classList.toggle('hidden-buttons');

    }

}

let bobnew = new Bob(bob);
let hero;
showHumman();
bobnew.start();

function showHero() {
    if (bobnew.calories > 500) {
        hero = new SuperBob(bobnew);
        bobnew.start();
    } else {
        bobnew.showMessage('Мало калорий! Покушайте!');
    }
}

let validateId = setInterval(() => {
    if (bobnew.calories < 483) {
        document.querySelector('.hungry').setAttribute('style', 'display: block;');
    }
    if (bobnew.calories > 500) {
        document.querySelector('.hungry').setAttribute('style', 'display: none;');
    }
    if (bobnew.calories < 500 && bobnew.isHero()) {
        bobnew.stopHero();
        bobnew.stop();
        hero = '';
    }
}, 10);

function showHumman() {
    img.innerHTML = `<img class="bob" src="${bobnew.foto}" alt="bob"><div class="hungry" id="hungry-msg">I'm HUNGRY!!</div><div class="sleeppe"><img class="sleep_imj" src="${bobnew.sleepp}" alt="sleep"></div><div class="bang"><img class="bang_imj" src="${bobnew.bang}" alt="bang"></div>`;
    let render = '';
    render += `<div class="first-name"><span class="first-name__label">Имя:</span><span class="first-name__value" id="firs-name"> ${bobnew.firstName}</span></div>`;
    render += `<div class="last-name"><span class="last-name__label">Фамилия:</span><span class="last-name__value" id="last-name"> ${bobnew.lastName}</span></div>`;
    render += `<div class="last-name"><span class="last-name__label">Штаны:</span><span class="last-name__value" > ${bobnew.pants}</span></div>`;
    render += `<div class="last-name"><span class="last-name__label">Возраст:</span><span class="last-name__value" > ${bobnew.age}</span></div>`;
    render += `<div class="calories"><span class="calories__label">Калории:</span><span class="calories__value" id="calories"> ${bobnew.calories}</span></div>`;

    render += `<div class="f-title hidden-buttons" id="f-title"><div class="sleep" id="f-message-1"></div>`;
    render += `<div class="sleep-info"><div class="sleep-up" id="f-message-2"></div><div class="sleep-time" id="sleep-time"></div></div></div>`;
    render += `<div id="buttons"><div class="sleep-for" onclick="bobnew.sleepBob()" id="sleep-btn">Спать</div>`;
    render += `<div class="sleep-for" onclick="bobnew.feed()" id="feed-btn">Кушать</div>`;
    render += `<div class="sleep-for" onclick="showHero()" id="hero-btn">Turn into SuperBob</div>`;
    render += `<div class="hero-buttons hidden-buttons" id="hero-buttons"><div class="sleep-for" onclick="hero.fly()" id="fly-btn">Летать</div>`;
    render += `<div class="sleep-for" onclick="hero.fightWithEvil()" id="fight-btn">Драться</div></div>`;

    render += `</div>`;
    info.insertAdjacentHTML('beforeend', render);
}
