window.onload = function() {
    //waits for everything to load
        //Set Square and Class

    const squares = document.querySelectorAll("#board div"); 
    //selects squares

    let currentperson = "X" //first person is always X
    let boardlayout = Array(9).fill(null); //tracking board

    squares.forEach((square,placement) => {square.classList.add("square");
        //square class to each grid

         //Update board
    square.addEventListener('click',() => {
        if (boardlayout[placement] ==null){
            //Only adds X or O if square is empty

            boardlayout[placement] = currentperson; //square position for player
            square.textContent = currentperson; // shows X or O
            square.classList.add(currentperson); //Adds X or O

            currentperson = currentperson === "X"?"O": "X";
            //Switch person after 
            //condition ? expressionIfTrue : expressionIfFalse.
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
        
    });
}

        //Check for winner and update
                //if 3xs = X is winner or if 3Os = O is winner
                // "CONGRATULATIONS!! X or  is the Winner"

                //there is a tie
                // "UH OH! There is a tie. Try Again"

        //restart game
            //New Game Button - Just want a restart regularly

                    //Automatic new game button 

                
            


        //Disallow cheating***