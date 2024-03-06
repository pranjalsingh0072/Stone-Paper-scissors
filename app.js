let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompchoice = () =>{
    const options = ["Rock", "Paper","Scissors"];
     const randIdx = Math.floor(Math.random() * 3);
     return options[randIdx];
};

    const drawGame = () => {
      
        msg.innerText = "Game was Draw. Play again.";
        msg.style.backgroundColor = "#081b31";
     };
     
    const showWinner = (userWin, userchoice, compchoice) => {
        if(userWin) {
            userScore++;
            userScorePara.innerText = userScore;
             msg.innerText = `You win!  Your ${userchoice} beats ${compchoice}`;
             msg.style.backgroundColor = "green";
        }else {
            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText = `You lose. ${compchoice} beats  Your ${userchoice}`;
            msg.style.backgroundColor = "red";
        }
    };


const playGame = (userchoice) => {
   
    //Generate computer choice
    const compchoice = gencompchoice();
 

    if(userchoice === compchoice){
        drawGame();
    }else {
        let userWin = true;
        if(userchoice === "Rock"){
            //scissors, paper
            userWin = compchoice === "Paper" ? false : true;
        } else if(userchoice === "Paper"){
            //rock, scissors
            userWin = compchoice === "Scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compchoice === "Rock" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");
       playGame(userchoice);
    });
});