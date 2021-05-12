window.addEventListener("load",function(){
    document.querySelector(".preloader").classList.add("complete");
    setTimeout(() =>{
        document.querySelector(".preloader").style.display="none";
    },3000)
})

const header = document.getElementById('header');
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');

document.onclick = function(e){
    if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar'){
        toggle.classList.remove('active');
        navbar.classList.remove('active');
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
}




// ======> Popup
const popup = document.querySelector('.popup');
const popClose = document.querySelector('.close');

window.onload = function(){
    setTimeout(function(){
        popup.style.display = "block"
    }, 10000)
}

popClose.addEventListener('click', () => {
    popup.style.display = "none";
})

// Scroll top
const scrollBtn = document.querySelector('.scroll-btn') ;


window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = 'block' ;
    }
    else {
        scrollBtn.style.display = 'none' ;
    }
})
scrollBtn.addEventListener('click' , () => {
    window.scroll({
        top: 0 ,
        behavior: "smooth"
    })
})



