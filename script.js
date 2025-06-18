let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const getCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame=(userchoice)=>{
    console.log("user choice = ", userchoice);
    const CompChoice=getCompChoice();
    console.log("Computer choice = ", CompChoice);

    if(userchoice==CompChoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=CompChoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=CompChoice==="scissor"?false:true;
        }
        else{
            userwin=CompChoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,CompChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playGame(userchoice);
    })
});

const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="game was draw";
}

const showwinner=(userwin,userchoice,CompChoice)=>{
    if(userwin){
        userScore++;
        userscorepara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`you win! ${userchoice} beats ${CompChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compcorepara.innerText=compScore;
        console.log("you lose");
        msg.innerText=`you lose! ${userchoice} looses ${CompChoice}`;
        msg.style.backgroundColor="red";
    }
};

const userscorepara=document.querySelector("#user-score");
const compcorepara=document.querySelector("#comp-score");

const resetbtn=document.querySelector("#reset-btn");

resetbtn.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    userscorepara.innerText=userScore;
    compcorepara.innerText=compScore;
    msg.innerText="Play your game";
    msg.style.backgroundColor="#081b31";
})