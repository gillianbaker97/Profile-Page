var OneClick = document.querySelector('.text-block2');

var click = function myFunction(event){
    event.preventDefault();
    window.location.replace("pwgen.html");
};

OneClick.addEventListener("click", myFunction);