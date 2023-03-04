const hamburger = document.querySelector('.hamburger');
const hamburger_icon = document.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');
const appear = document.querySelector('.nav-link-menu');
const table = document.querySelector('.Megamenu');

hamburger.addEventListener('click' , () =>{
    hamburger_icon.innerText = hamburger_icon.innerText === 'menu'
    ? 'close' 
    : 'menu';

    mobile_menu.classList.toggle('is-open');
})

// Mega-menu code

appear.addEventListener('mouseenter' , () => {
    table.style.display = 'block'
})

appear.addEventListener('mouseleave' , () => {
    table.style.display ="none"
})

table.addEventListener('mouseenter' , () => {
    table.style.display ="block"
})

table.addEventListener('mouseleave' , () => {
    table.style.display ="none"
})
