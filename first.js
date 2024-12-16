let boxes=document.querySelectorAll(".box");
let rebtn=document.querySelector("#reset-btn");
let reset=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newbtn=document.querySelector("#new-btn");
let turnO=true;
let button=0;
const regame=()=>{
    button=0;
    turnO=true;
    enabled();
    reset.classList.add("hide");
}
const disabled=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabled=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const winPattern=[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.textContent="O";
            box.style.color="#585123";
            turnO=false;
        }
        else{
            box.textContent="X";
            box.style.color="#F58549";
            turnO=true;
        }
       box.disabled=true;
       button++;
       let isWinner=checkWinner();
if(button===9 && !isWinner){
    gameDraw();
}
       checkWinner();
    })
});
const gameDraw=()=>{
    msg.innerText=`Game is Tied!!! TRY AGAIN!!`;
    reset.classList.remove("hide");
    disabled();
}
const showWinner=(winner)=>{
     msg.innerText=`Congratulations!!Your winner is ${winner}`;
     reset.classList.remove("hide");
     disabled();
}
const checkWinner=()=>{
    for(let patterns of winPattern){
      let posn1=boxes[patterns[0]].innerText;
      let posn2=boxes[patterns[1]].innerText;
      let posn3=boxes[patterns[2]].innerText;
         
    if(posn1!="" && posn2!="" && posn3!="" && posn1===posn2 && posn2===posn3){
        showWinner(posn1);
        return true;
    }
 }
}
rebtn.addEventListener("click",regame);
newbtn.addEventListener("click",regame);