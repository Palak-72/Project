//search engin
let SearchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick =()=>
{
    SearchForm.classList.toggle('active');
    
    ShoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
//shpping cart
let ShoppingCart=document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick =()=>
{
    ShoppingCart.classList.toggle('active');
    SearchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

//login form
let loginForm=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick =()=>
{
    loginForm.classList.toggle('active');
    ShoppingCart.classList.remove('active');
    SearchForm.classList.remove('active');
    navbar.classList.remove('active');


}

let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick =()=>
{
    navbar.classList.toggle('active');
    ShoppingCart.classList.remove('active');
    SearchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

 window.onscroll=()=>
{
    SearchForm.classList.remove('active');
    ShoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}



var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:   {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
     
      },
      1020: {
        slidesPerView: 3,
        
      },
    },
  });


  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:   {
        delay: 7500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
     
      },
      1024: {
        slidesPerView: 3,
        
      },
    },
  });