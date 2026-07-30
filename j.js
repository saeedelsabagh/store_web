let navbar=document.querySelector('.navbar');
let menu=document.getElementById('menubtn');
menu.onclick=()=>{
    navbar.classList.toggle('active');
}

let containar_cart=document.querySelector('.containar_cart');
let cart=document.getElementById('shopping-cart');
cart.onclick=()=>{
    containar_cart.classList.toggle('active');
}

let input=document.getElementById('input');
let search=document.getElementById('search');
search.onclick=()=>{
    input.classList.toggle('active');
}