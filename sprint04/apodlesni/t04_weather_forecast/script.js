"use strict"
let searchValue = 'Київ';
let lat = 0;
let lon = 0;
const wrapper = document.querySelector('#blockDays');
const inpuntValue = document.querySelector('#search__city');
const inputSearch = document.querySelector('#city__submit');
const cityName = document.querySelector('.main__city__name')

function getN() {
    return searchValue = inpuntValue.value;
}
setTimeout(finishLoader(searchValue), 400);
setTimeout(loader, 200);

inputSearch.addEventListener('click', () => {
    setTimeout(finishLoader(getN()), 400);
    setTimeout(loader, 200);
})

inputSearch.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        setTimeout(finishLoader(getN()), 400);
        setTimeout(loader, 200);
    }
});

function getWeathear(arr) {
    wrapper.innerHTML = '';

    arr.forEach(el => {
        if (arr.length = 7) {
            const dat = new Date(el.dt * 1000);
            let date = formatDate(dat.getDate());
            let mounth = formatDate(dat.getMonth() + 1);


            wrapper.innerHTML += `
            <div class="main__items">
            <p class="items__day-link">${formatWeek(dat)}</p>
            <p class="items__date">${date}</p>
            <p class="items__month">${formatMounth(mounth)}</p>
            <div class="items__img" title="${el.weather[0].description}">
                <img class="img__weather" src="https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png" alt="pogod">
            </div>
            <div class="items__temp">
                <div class="min">
                    <p>мін.</p>
                    <span>${Math.round(el.temp.min)}°</span>
                </div>
                <div class="max">
                    <p>макс.</p>
                    <span>${Math.round(el.temp.max)}°</span>
                </div>
            </div>
        </div>
            `
        }
    });
}


function formatWeek(date) {
    class Day {
        day;
        date;
        constructor(day, date) {
            this.day = day;
            this.date = date;
        }
    }
    const dayArray = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Суббота'];
    let dates = date;
    let week = new Array();
    week.lenght = 7;
    for (let i = 0; i < 7; i++) {
        week[i] = new Day(dates.getDay(), dates.getDate());
        dates.setDate(dates.getDate() + i);
    }
    const day = dayArray[week[0].day];
    const datea = week[0].date;
    return day;
}


let formatDate = (date) => {
    let dates = new Intl.NumberFormat('en-IN', { minimumIntegerDigits: 2 }).format(date);

    return dates;
}

let formatMounth = (date) => {
    switch (date) {
        case '01':
            return 'Січня';
            break;
        case '02':
            return 'Лютого';
            break;
        case '03':
            return 'Березня';
            break;
        case '04':
            return 'Квітня';
            break;
        case '05':
            return 'Травня';
            break;
        case '06':
            return 'Червня';
            break;
        case '07':
            return 'Липня';
            break;
        case '08':
            return 'Серпня';
            break;
        case '09':
            return 'Вересня';
            break;
        case '10':
            return 'Жовтня';
            break;
        case '11':
            return 'Листопада';
            break;
        case '12':
            return 'Грудня';
            break;
        default:
            console.log("Нет таких значений");
    }

}



async function finishLoader(str) {
    let url = `https://api.openweathermap.org/geo/1.0/direct?q=${str}&limit=1&appid=664ad5c35973c5467382b833cd8802c7`;
    const strLow = str.toLowerCase()
    const resultName = strLow.charAt(0).toUpperCase() + strLow.slice(1)
    cityName.innerHTML = `
    <h1>Погода <strong>в ${resultName}</strong></h1>
    `;
    try {
        const resulte = await fetch(url);
        const data = await resulte.json();
        const whent = await data[0];
        lat = await whent.lat;
        lon = await whent.lon;
    } catch (e) {
        console.log(e);
        cityName.innerHTML = `
        <h1><strong>Такого міта не існує.Виберіть інше місто.</strong></h1>
        `;
        wrapper.innerHTML = '';
    }

}

async function loader() {
    try {
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&lang=uk&exclude=current,minutely,hourly,alerts&units=metric&appid=664ad5c35973c5467382b833cd8802c7`;
        const result = await fetch(url);
        const data = await result.json();
        const whent = await data.daily;
        getWeathear(whent)
    } catch (e) {
        console.log(e);
    }
}
