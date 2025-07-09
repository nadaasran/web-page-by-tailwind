// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';


// let randomNumber = Math.floor(Math.random() * imageArray.length );


// let randomOption = true;


// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );
    
//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';
    
//     }, 4000);
    
//   }
// }
// randomizeImgs();

let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let logo= document.querySelector(".logo");


menuIcon.onclick = () => {
  navbar.classList.toggle("hidden");
}
// window.onscroll = () => {
//   navbar.classList.remove("active");
// }
// window.addEventListener('scroll', () => {
//     header.classList.toggle("shadow" , window.scrollY > 0);
// });

window.addEventListener('scroll', () =>{
  if (window.scrollY > 50) {
    header.classList.add('bg-white' ,'text-black' )
    navbar.classList.add('text-black');     
    logo.classList.add('text-black'); 
    menuIcon.classList.add('text-black');   

    }
  else {
    header.classList.remove('bg-white', 'text-black');
    navbar.classList.remove('text-black');   
    logo.classList.remove('text-black');
    menuIcon.classList.remove('text-black')     


  }
})
  window.addEventListener('DOMContentLoaded', () => {
    header.classList.remove('opacity-0', 'translate-x-10');
    header.classList.add('opacity-100', 'translate-x-0');
  });