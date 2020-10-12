var player=1;
var gameboard;
var winner;
var button;




window.onload= function(){


    
    gameboard=document.querySelectorAll('#board div');
    winner= document.getElementById("status");
    button= document.getElementsByClassName("btn")[0];


    for (i=0; i<gameboard.length; i++){
        gameboard[i].classList.add("square");
        gameboard[i].addEventListener("click", startGame);
        gameboard[i].addEventListener("mouseover", highlight);
        gameboard[i].addEventListener("mouseout", nohighlight);
    }



}


function startGame(i){

    if ((i.target.innerHTML != "X")&&(i.target.innerHTML != "O")){
        if (player == 1){
            i.target.innerHTML = "X";
            i.target.className += (" X ");
            player = 2;
        }
        else{
            i.target.innerHTML = "O";
            i.target.className += (" O ");
            player = 1;
        }
    }
    checkWin();


}

function highlight(i){
    i.target.classList.add("hover");
    
}

function nohighlight(i){
    i.target.classList.remove("hover");
}


function checkWin(){

    var win1= gameboard[0]&&gameboard[1]&&gameboard[2]
    var win2= gameboard[3]&&gameboard[4]&&gameboard[5]
    var win3= gameboard[6]&&gameboard[7]&&gameboard[8]
    var win4= gameboard[0]&&gameboard[3]&&gameboard[6]
    var win5= gameboard[1]&&gameboard[4]&&gameboard[6]
    var win6= gameboard[2]&&gameboard[5]&&gameboard[8]
    var win7= gameboard[0]&&gameboard[4]&&gameboard[8]
    var win8= gameboard[2]&&gameboard[6]&&gameboard[2]
    
    

if((win1.innerHTML=="X")||(win2.innerHTML=="X")
||(win3.innerHTML=="X")||(win4.innerHTML=="X")||
(win5.innerHTML=="X")||(win6.innerHTML=="X")||
(win7.innerHTML=="X")||(win8.innerHTML=="X")){

    winner.classList.add("you-won");
    winner.innerHTML = "X Won!";

}else if


((win1.innerHTML=="O")||(win2.innerHTML=="O")
||(win3.innerHTML=="O")||(win4.innerHTML=="O")||
(win5.innerHTML=="O")||(win6.innerHTML=="O")||
(win7.innerHTML=="O")||(win8.innerHTML=="X")){

    winner.classList.add("you-won");
    winner.innerHTML = "O Won!";

}


button.addEventListener("click",newGame);
function newGame(){
    
    for(var i = 0; i<gameboard.length; i++){
        gameboard[i].innerHTML = "";
        gameboard[i].classList.remove("X");
        gameboard[i].classList.remove("O");
    }
    winner.innerHTML = "Move your mouse over a square and click to play an X or an O.";
     winner.classList.remove("you-won");

     

    
}

}