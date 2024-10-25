let box=document.querySelectorAll(".btn");
let reset=document.querySelector(".reset-btn");
let w=document.querySelector(".win");

const win=[[0,1,2], [3,4,5], [6,7,8],
    [0,3,6],[1,4,7], [2,5,8],
    [0,4,8], [2,4,6]];
let turnOfX=true;
box.forEach( (btn) => {
    btn.addEventListener("click", () => {
        console.log("Box Was Clicked");
        if(turnOfX){
            btn.innerText="X";
            btn.style.color="#ff6060";
            w.innerText="Turn Of O";
            turnOfX=false;
        }
        else{
            btn.innerText="O";
            btn.style.color="#60ffd7";
            w.innerText="Turn Of X";
            turnOfX=true;
        }
        btn.disabled=true;
        winner();
    })
});
let winner= () => {
    let won=false;
    win.forEach((wi) =>{
        pos1=box[wi[0]].innerText;
        pos2=box[wi[1]].innerText;
        pos3=box[wi[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                won=true;
                console.log("Winner is: "+pos1);
                w.innerText="The Winner is: "+pos1;
                wi.forEach(i => box[i].classList.add("winning"));
                box.forEach((btnn) => {
                    btnn.disabled=true;
                })
            }
        }
        });
        if(won==false && draw()==true){
            w.innerText="It's a Draw";
    }
}
let draw= () =>{
    let i;
    for(i=0;i<box.length;i++){
        if(box[i].innerText == "") {
            return false;
    }
    }return true;

}

reset.addEventListener("click",()=>{
    box.forEach((button) => {
        button.disabled=false;
        button.innerText="";
        w.innerText="First Turn Is Of X";
        button.classList.remove("winning");
        turnOfX=true;
    })
})
