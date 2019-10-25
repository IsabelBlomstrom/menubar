
function toggleMenu() {
   let header = document.querySelector('header')

    if (header.style.height === '100vh') {
        header.style.height = '3rem'
    }
    else {
        header.style.height = '100vh'
    }
}