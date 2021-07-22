var OneClick = document.querySelector('.text-block2');

var click = function myFunction(event){
    event.preventDefault();
    location.href = 'file:///Users/gillianbaker/Desktop/Coding-Quiz-Challenge/startpg.html';
};

OneClick.addEventListener("click", click);


