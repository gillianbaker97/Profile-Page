var OneClick = document.querySelector('.text-block2');

var click = function myFunction(event){
    event.preventDefault();
    window.location("pwgen.html");
};

OneClick.addEventListener("click", myFunction);