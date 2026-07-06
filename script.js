let boxes = document.querySelectorAll(".box") ;
let resetBtn = document.querySelector("#resetBtn") ;
let newBtn = document.querySelector("#newBtn") ;
let msgContainer = document.querySelector(".msg-container") ;
let msg = document.querySelector("#msg") ;


let turnO = true ;

const winPatterns = [
    [0,1,2] , [3,4,5] , [6,7,8] , [0,3,6] , [1,4,7] , [2,5,8] , [0,4,8] , [2,4,6] 
] ;

boxes.forEach((box) =>{
    box.addEventListener("click" , ()=>{
        
        if(turnO == true) {// player O
            box.innerText = "O" ;
            turnO = false ;
        }
        else { // player X
            box.innerText = "X" ;
            turnO = true ;
        }
        box.disabled = true ;

        checkWinner(); // function to check winner by recognising patterns
    }); 
});

const resetGame =()=>{
     turnO = true ;
     enable() ;
     msgContainer.classList.add("hide") ;
}
const disable =() =>{
    for(let box of boxes) {
        box.disabled = true ;
    }
}
const enable =()=>{
    for(let box of boxes) {
        box.disabled = false ;
        box.innerText = "" ;
    }
}
const showWinner =(winner)=>{
    msg.innerText = `Winner is ${winner}` ;
    msgContainer.classList.remove("hide") ;
    disable() ;
}


const checkWinner =()=>{
      
    for(let pattern of winPatterns) {

            let p1 = boxes[pattern[0]].innerText ;
            let p2 = boxes[pattern[1]].innerText ;
            let p3 = boxes[pattern[2]].innerText ;

            if(p1 != "" && p2 != "" && p3 != "") {
                if(p1 == p2 && p2 == p3) {
                    showWinner(p1) ;
                }
            }
    }
}

newBtn.addEventListener("click" , resetGame) ;
resetBtn.addEventListener("click" , resetGame) ;