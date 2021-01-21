let burger = document.querySelector('.burger');
let menu = document.querySelector('nav');

burger.addEventListener('click', function(){
    burger.classList.toggle('croix');
    menu.classList.toggle('navOpen');
});


let liens = document.querySelectorAll('nav a');

liens.forEach(function(lien){
    lien.addEventListener('click', function(){
        burger.classList.remove('croix');
        menu.classList.remove('navOpen');
    })
});
