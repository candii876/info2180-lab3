"use strict";

window.onload = function(){
    
    console.log('game has loaded');
    let gameboard = document.querySelectorAll("#board div");
    for(let i=0; i<gameboard.length; i++){
        gameboard[i].classList.add('square');
        //can also try gameboard[i].className="square";

        //Exercise 1
    };
}

