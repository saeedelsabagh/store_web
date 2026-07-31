let navbar=document.querySelector('.navbar');
let menu=document.getElementById('menubtn');


let containar_cart=document.querySelector('.containar_cart');
let cart=document.getElementById('shopping-cart');

let input=document.getElementById('input');
let search=document.getElementById('search');


menu.onclick = () => {
    navbar.classList.toggle("active");
    containar_cart.classList.remove("active");
    input.classList.remove("active");
};

cart.onclick = () => {
    containar_cart.classList.toggle("active");
    navbar.classList.remove("active");
    input.classList.remove("active");
};
let search_2=document.getElementById('search_form');
search.onclick = () => {
    input.classList.toggle("active");
    navbar.classList.remove("active");
    containar_cart.classList.remove("active");
    search_2.classList.toggle("active");
    
};


