"use strict";

window.onload = function(){
    
    console.log('game has loaded');
    let layout = document.querySelectorAll("#board div");
    let currentBoard = [];
    for(let i=0; i<layout.length; i++){
        layout[i].classList.add('square');
        //can also try layout[i].className="square";

        //end of Exercise 1
        layout[i].addEventListener('click', function(){
            console.log(`You just clicked square ${i}! `);
        });

        //Exercise 5 - "hover"
        layout[i].addEventListener('mouseover', function(){
            this.classList.add('hover');
        });
        layout[i].addEventListener('mouseout', function(){
            this.classList.remove('hover');
        });
    };
     
    var currentPlayer = document.querySelector("#status");
    //var value = "x";
    //switching players
    currentPlayer.addEventListener('click', function(){
        currentPlayer= "x";
        console.log(currentPlayer);
        //incomplete

    });
    
    /*Winning placements are as follows:
    [0,1,2]
    [0,3,6]
    [0,4,8]
    [1,4,7]
    [2,5,8]
    [2,4,6]
    [3,4,5]
    [6,7,8]*/




}

