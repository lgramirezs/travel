// variables
const buttonDark = document.querySelector('#buttonDark');
const buttonDarkDesktop = document.querySelector('#buttonDarkDesktop');
const html = document.querySelector('#html');


// addEventListener
buttonDark.addEventListener('click', darkMode );
buttonDarkDesktop.addEventListener('click', darkMode );


// functions
function darkMode(){
    html.classList.toggle('dark');
}