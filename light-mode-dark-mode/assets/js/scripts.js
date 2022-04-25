const darkModeClass = 'darkmode';
const botao = document.getElementById('btn-mode');
const h1 = document.getElementById('texto');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

botao.addEventListener('click', changeMode);


function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    botao.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode'

    if (botao.classList.contains(darkModeClass)) {
        botao.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }
    botao.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';
}

