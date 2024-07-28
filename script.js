let you=0;
let computer=0;

const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscore=document.querySelector("#you");
const compscore=document.querySelector("#computer");
const gencomputerchocie=()=>{
    const option=["rock","paper","scissor"];
    const randomidx= Math.floor(Math.random()*3);
    return option[randomidx];
};

const drawgame=()=>{
    msg.style.backgroundColor="black";
    msg.innerText="Game was draw. Play again!";
}

const showwinner=(userwin,userchoice,compuetrchoice)=>{
    if(userwin){
        you++;
        userscore.innerText= you;
        msg.innerText=`You Win! Your ${userchoice} beats ${compuetrchoice}`;
        msg.style.backgroundColor="green";
    }else{
        computer++;
        compscore.innerText=computer;
        msg.innerText=`You Lose! ${compuetrchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    //generate computer choice
    const compuetrchoice=gencomputerchocie();
    console.log("compuetr choice=",compuetrchoice)

    if(userchoice===compuetrchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
          userwin= compuetrchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
           userwin= compuetrchoice==="scissor"?false:true;
        }else{
           userwin= compuetrchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compuetrchoice);
    }
}
choice.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});