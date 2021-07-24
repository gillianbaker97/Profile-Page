var OneClick = document.querySelector('.text-block2');
var TwoClick = document.querySelector('.text-block3');
var ThreeClick = document.querySelector('.text-block4');
var FourClick = document.querySelector('.text-block5');
var FiveClick = document.querySelector('.text-block6');



var click1 = function myFunction1(event){
    event.preventDefault();
    location.href = 'https://github.com/gillianbaker97/Coding-Quiz-Challenge';
};

OneClick.addEventListener("click", click1);



var click2 = function myFunction2(event){
    event.preventDefault();
    location.href = 'https://github.com/gillianbaker97/Password-Generator';
};

TwoClick.addEventListener("click", click2);



var click3 = function myFunction3(event){
    event.preventDefault();
    location.href = 'file:///Users/gillianbaker/Desktop/Coding-Quiz-Challenge/startpg.html';
};

ThreeClick.addEventListener("click", click3);



var click4 = function myFunction4(event){
    event.preventDefault();
    location.href = 'file:///Users/gillianbaker/Desktop/Coding-Quiz-Challenge/startpg.html';
};

FourClick.addEventListener("click", click4);



var click5 = function myFunction5(event){
    event.preventDefault();
    location.href = 'file:///Users/gillianbaker/Desktop/Coding-Quiz-Challenge/startpg.html';
};

FiveClick.addEventListener("click", click5);


