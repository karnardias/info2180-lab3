window.onload = function() {
    //waits for everything to load
        //Set Square and Class

    const squares = document.querySelectorAll("#board div"); 
    //selects squares

    const statusmsg = document.getElementById('status')
    //displays msgs

    const newgame= document.querySelector('.btn');

    let currentperson = "X" //first person is always X
    let boardlayout = Array(9).fill(null); //tracking board
    let gameover = false;

    squares.forEach((square,placement) => {square.classList.add("square");
        //square class to each grid

         //Update board
    square.addEventListener('click',() => {
        if (!gameover && boardlayout[placement] ==null){
            //Only adds X or O if square is empty

            boardlayout[placement] = currentperson; //square position for player
            square.textContent = currentperson; // shows X or O
            square.classList.add(currentperson); //Adds X or O

            const winner = whowins();
            if (winner){
                statusmsg.textContent = `CONGRATULATIONS! ${winner} is the Winner`; //use backticks 
                //if 3xs = X is winner or if 3Os = O is winner 
                statusmsg.classList.add("you-won");
                gameover = true;
                 //no more plays allowed
            }
            else if ( !boardlayout.includes(null)){
                statusmsg.textContent = "UH OH! Its a draw!"
                gameover= true;
            }
            else{
                currentperson = currentperson === "X"?"O": "X";
                statusmsg.textContent = `It is ${currentperson} turn`;
                //Switch person after 
                //condition ? expressionIfTrue : expressionIfFalse.
                //no more plays allowed
            }

            }
        });
 
        //Change Style When mouse is moved over square
                //hover from .css file
        //Change Style When mouse is moved over square
            //hover from .css file
        square.addEventListener('mouseover',()=> {
            if (boardlayout[placement] === null && !square.textContent){
                square.classList.add('hover');
            }
        });
        square.addEventListener('mouseout',()=> {
            square.classList.remove('hover');
            
        });

        //restart game
            //New Game Button - Just want a restart regularly
        newgame.addEventListener('click',() =>{
            //reset board itself
            boardlayout = Array(9).fill(null); 

            squares.forEach(square => {
                square.textContent ="";
                square.classList.remove ("X","O");
                //clear all the squared from X or O
            });
            statusmsg.textContent = "Click a square to play again";
            statusmsg.classList.remove("you-won");
            //clear messages sent ou

            currentperson = "X";
            gameover = false;
            //reset to OG

        });
        

 //Check for winner and update
        function whowins(){
            const winningcriteria = [
                [0,1,2],[3,4,5], [6,7,8], //winning in rpws
                [0,3,6],[1,4,7], [2,5,8], //winning in columns
                [0,4,8],[2,4,6] //winning diagonally
            ];
            for(let win of winningcriteria){

                const [w1,w2,w3] = win; // meaning for first one w1 = 0 w2 =1 and w3 = 2
                //for (initializin; condtion, afterthought) let allows block scoping

                if (
                    boardlayout[w1] && // checks if 1st square is not empty
                    boardlayout[w1] === boardlayout[w2] &&  // checks if first and second have the same X or Os
                    boardlayout[w1] === boardlayout[w3]) // checks if 1st or 3rd match X or O
                    {
                        return boardlayout[w1]; // returns X or O
                }
            }
            return null; //no winner
        };

    

  });
}

    

            


        //Disallow cheating***