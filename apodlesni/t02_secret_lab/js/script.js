function transformation() {
    
    if (document.getElementById('subject').innerHTML == 'Human'){
    document.getElementById('subject').innerHTML = 'Best';
    document.getElementById('lab').style.backgroundColor = '#70964b';
    document.getElementById('subject').style.fontSize = '130px';
    document.getElementById('subject').style.letterSpacing = '6px'
    }else if (document.getElementById('subject').textContent == 'Best' ){
    document.getElementById('subject').innerHTML = 'Human';
    document.getElementById('lab').style.backgroundColor = '#ffb300';
    document.getElementById('subject').style.fontSize = '60px';
    document.getElementById('subject').style.letterSpacing = '2px'
    }
}
transformation()