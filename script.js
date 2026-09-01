
let Userscore = 0;
let Compscore = 0;
let exit = false;

function getUserInput() {
           return prompt("choose rwok pepah or scizaw to play, type exit to surrender");
};

function getCompChoice (){
    
    let randNum = Math.floor(Math.random() *3 +1);
    if (randNum == 1){
        return "rwok";
    }
    else if (randNum == 2){
        return "pepah"
    }
    else {
        return "scizaw"
    }
};


function playRound(round){
    
    let userInput = getUserInput();
    let compChoice = getCompChoice();
    console.log(" ");
    if(!userInput){
        console.log("you chose beeswax");
    }else {
    console.log(`you chose ${userInput}`);
    };
    console.log(`Computer chose ${compChoice}`);
    if(userInput!== "rwok" && userInput!== "pepah" && userInput!== "scizaw" && userInput != "exit"){
        console.log("please enter a valid value");
        i--;
    } else if (userInput.toLowerCase() == "exit"){
        console.log("you put your tail between your legs");
        exit = true;

    } else if (
        (userInput.toLowerCase() === "rwok" && compChoice == "scizaw") ||
        (userInput.toLowerCase() === "pepah" && compChoice == "rwok") ||
        (userInput.toLowerCase() === "scizaw" && compChoice == "pepah")
    ) {
        console.log(`you wins round ${round}`);
        Userscore ++;
    } else if(userInput == compChoice){
        console.log(`round ${round} draws`)
    } else {
        console.log(`round ${round} losts`);
        Compscore ++;
    }

};

function playGame(){
    for (i=1;i<=5;i++){

        if (exit==true){
           break;
        }
        else {
        playRound(i);
        }
    }  
    if(exit == true){
        console.log("you accepted defeat");
    } else if (Userscore > Compscore){
        console.log("you won the Game")
    } else if (Userscore == Compscore){
        console.log("oh draws!!")
    } else{
        console.log("you losts the GAME")
    }
}

playGame();