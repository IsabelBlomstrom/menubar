
function toggleMenu() {
   let header = document.querySelector('header')

    if (header.style.height === '100vh') {
        header.style.height = '3rem'
    }
    else {
        header.style.height = '100vh'
    }
}

function storText() {
let body = document.querySelector('body')

    if(body.style.fontSize === '2rem') {
        body.style.fontSize = '1rem'
    }
    else {
        body.style.fontSize = '2rem'
    }
}

/*let scale = 1;

function storText() {
    scale *= 1.1
    applyScale()
}

function applyScale() {
    let body = document.querySelector('body');
    body.style.fontSize = 'scale(' + scale + ')';
}*/
