"use strict";

window.onload = function(){   
    
    
    /*Winning placements are as follows:
    [0,1,2]
    [0,3,6]
    [0,4,8]
    [1,4,7]
    [2,5,8]
    [2,4,6]
    [3,4,5]
    [6,7,8]*/

    var winList = [[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [2,4,6], [3,4,5], [6,7,8]]
    
    const classX = 'X';
    const classO = 'O';
    //let gameOn = true; //gonna help with restarting

    //Exercise 1 - Layout the board
    let layout = document.querySelectorAll("#board div");
    let currentPlayer = 'X';
    for(let i=0; i<layout.length; i++){
        layout[i].classList.add('square');
        currentPlayer == classX ? layout[i].classList.add('.square.X') : layout[i].classList.add('.square.O');
        //can also try layout[i].className="square";

        //test
        layout[i].addEventListener('click', function(){
            console.log(`You just clicked square ${i}! `);
            switchPlayer();
        });

        //Exercise 3 - "hover" COMPLETE
        layout[i].addEventListener('mouseover', function(){
            this.classList.add('hover');
        });
        layout[i].addEventListener('mouseout', function(){
            this.classList.remove('hover');
        });
    }
    console.log('game has loaded');

    //no cheating - click once
    function noCheat(){
        console.log("already clicked!");
    }
    layout.forEach(cell =>{
        cell.addEventListener('click', playerTurn, {once: true});
    });

    function playerTurn() {
        return `It's ${currentPlayer}'s turn!`;
    }
    function switchPlayer(){
        currentPlayer = currentPlayer== classX ? classO : classX;
        console.log(playerTurn());
    }
    //DO NOT TOUCH ABOVE UNLESS IT IS A COMMENT!!!

    //status display
    /* var status = document.querySelector('#status');
    status.innerHTML= playerTurn();*/

        /*if (currentPlayer == 'x'){
            player.classList.add('square.X');
        }
        else{
            player.classList.add('.square.O');
        }

        ||
        
        currentPlayer = classX ? square.classList.add('.square.X') : square.classList.add('square.O'); */

    //play X or O
    /*function handleClick(e){
        const cell = e.target;
        const currentClass = playO ? classO : classX;
        noCheat(cell, currentClass);
    }

    function noCheat(cell, currentClass){
        cell.classList.add(currentClass);
        console.log(classX);
    }*/

    /*empty list used to store gameplay
    let currentBoard = [];*/
    
    
    /*function playX(ex){
        ex.className.add("x");
        ex.innerHTML="X";}*/

        
    

        /*layout[i].addEventListener('click', function(){
            playX(this);
            console.log("clicked");
        });*/

        /*Exercise 2
            Add an X or O when clicked
            alternate X and O
            add class X or O */



    /*function playO(oh){
        oh.className.add("O");
        oh.textContent="O";
    }*/

    //function restart(){}
}