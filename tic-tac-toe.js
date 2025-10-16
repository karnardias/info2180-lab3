window.onload = function() {
    //waits for everything to load
    //Set Square and Class
    const squares = document.querySelectorAll("#board div"); 
    //selects squares

    squares.forEach(square => {square.classList.add("square");
        //square class to each grid
        
    });

}