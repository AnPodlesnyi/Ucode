let fix = document.querySelector('#fix')

let getWeathear = (arrys) => {
    let rend = '<div class="containers"></div>';
    rend += '<div class="container">'
    arrys.forEach((item, key, arr) => {
        const dat = new Date(item.dt * 1000);
        let date = formatDate(dat.getDate()) + '.' + formatDate(dat.getMonth() + 1);
        rend +=
            `<div class="contr">
                <div class="date">${date}<hr></div>
                <div class="weather__icon"><img src="https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png" alt="weather"></div>
                <div class="min-max">
                    <div class="weather__min">min ${(Math.round(item.temp.min))} </div>
                    <div class="weather__max">max ${(Math.round(item.temp.max))}</div>
                </div>
                <div class="weather__desc">${item.weather[0].description}</div>
            </div > `;
    });
    rend += '</div>';
    fix.insertAdjacentHTML('beforeend', rend);
}

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=50.45&lon=30.51&lang=ru&exclude=current,minutely,hourly,alerts&cnt=6&units=metric&appid=5e6026becc69c32c6bdaad3914644b2a')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        getWeathear(data.daily)
        document.querySelector('.weather__city').textContent = data.timezone;
    })
    .catch(function () {
        //Обрабатываем ошибки
    });

let formatDate = (date) => {
    let dates = new Intl.NumberFormat('en-IN', { minimumIntegerDigits: 2 }).format(date);

    return dates;
}
