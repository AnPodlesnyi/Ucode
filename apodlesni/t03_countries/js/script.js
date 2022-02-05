function myFunc() {
    let evr = document.getElementsByTagName('li');
    for (let i = 0; i < evr.length; i++) {
        if (!evr[i].className) {
            evr[i].className = 'europe';
        }
        const stir = ['americas', 'asia', 'oceania', 'europe', 'africa'];
        if (!stir.includes(evr[i].className)) {
            evr[i].className = 'europe'
        }
        if (evr[i].getAttribute('data-feature') == null) {
            evr[i].setAttribute('data-feature', 'none');
            let div = document.createElement('div');
            div.className = "feature";
            evr[i].append(div);
            div.style.backgroundColor = '#aaabbc'
            let div1 = document.createElement('div');
            div1.className = "line";
            div.append(div1);
        }
        if (evr[i].getAttribute('data-feature') == 'mountains') {
            let div = document.createElement('div');
            div.className = "feature";
            evr[i].append(div);
            div.style.backgroundImage = 'url("assets/images/mountain.png")';
        }
        if (evr[i].getAttribute('data-feature') == 'beach mountains') {
            let div = document.createElement('div');
            div.className = "feature";
            evr[i].append(div);
            div.style.backgroundImage = 'url("assets/images/beach.png")'
            let div1 = document.createElement('div');
            div1.className = "feature";
            evr[i].append(div1);
            div1.style.backgroundImage = 'url("assets/images/mountain.png")';
        }
        if (evr[i].getAttribute('data-feature') == 'beach') {
            let div = document.createElement('div');
            div.className = "feature";
            evr[i].append(div);
            div.style.backgroundImage = 'url("assets/images/beach.png")'
        }
        console.log(evr[i].getAttribute('data-feature'))
    }
}
myFunc()