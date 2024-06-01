console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let turnaudio = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")

let boxes = document.querySelectorAll(".box");
let rebtn = document.querySelector("#reset");
let info = document.querySelector(".info");
let img = document.querySelector(".ab");

let turnX = true; //player0
const Wpatt = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach(element => {
    element.addEventListener("click",() => { 
        
        if(element.innerText == ""){
        if(turnX){
            element.innerText = "X";
            info.innerText = `Turn for O`;
            turnX = false;
            turnaudio.play();
        } else{
            element.innerText = "O";
            info.innerText = `Turn for X`
            turnX = true;
            turnaudio.play();
        }
        checkwin();
        gover();
    }
});
});

const checkwin = () => {
    for (i of Wpatt){
       let a = boxes[i[0]].innerText;
       let b = boxes[i[1]].innerText;
       let c = boxes[i[2]].innerText;
       if(a==b && b==c && a!=""){
        info.innerText = `Player ${a} WON!`;
        img.classList.remove("img");
        gameover.play();
        for (let k of boxes){
            if (k.innerText == ""){
                k.innerText = "-";
                
            }
        }
       }
    }
}

document.querySelector("#reset").addEventListener("click", ()=>{
    for(i of boxes){
        i.innerText = "";
        info.innerText = "Turn for X";
        turnX = true;
        img.classList.add("img");
        

    }
})
const gover = ()=>{
    let c = 0;
    
    for (let box of boxes){
        if(box.innerText != ""){
            c++;
        }
        if(c==9){
            gameover.play();
        }
    }


}



