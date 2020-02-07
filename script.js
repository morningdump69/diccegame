let score1 = document.getElementsByTagName("p")[1]
let score2 = document.getElementsByTagName("p")[2]
let roll = document.getElementsByTagName("p")[3]
let button = document.getElementById("roller")
let reset = document.getElementById("reset")
let dice = document.getElementById("dice")
let player1 = 0
let player2 = 0
let turn = 0


    

document.addEventListener("click",(event)=> {
    if (event.target == button) {
        let num = Math.ceil(Math.random()*6)
        if (turn % 2 == 0){
            player1 += num
        }

        else{
            player2 += num
        }

        score1.textContent = `Your current score is ${player1}`
        score2.textContent = `Your current score is ${player2}`
        switch (true) {

            case 
            
                num == 1:
                if (turn % 2 ==0){

                    score1.textContent = "Player1 Looses and must now die"
                    score2.textContent = "Player2 wins and is now free"
                }
                else {
                    score1.textContent = "Player1 wins and is now free"
                    score2.textContent ="Player2 looses and must now die"
                }
                button.style.display = "none"
                reset.style.display = "inline"
                dice.style.backgroundImage = "url(img/dice1.png)"
                break

            case 
            
                num == 2:

                roll.textContent = `You rolled  two!`
                dice.style.backgroundImage = "url(img/dice2.png)"
                break

            case 
                num == 3:

                roll.textContent = `You rolled  three!`
                dice.style.backgroundImage = "url(img/dice3.png)"
                break

            case 
                num == 4:

                roll.textContent = `You rolled  four!`
                dice.style.backgroundImage = "url(img/dice4.png)"
                break

            case 
                num == 5:

                roll.textContent = `You rolled  five!`
                dice.style.backgroundImage = "url(img/dice5.png)"
                break

            case 
                num == 6:

                roll.textContent = `You rolled  six!`
                dice.style.backgroundImage = "url(img/dice6.png)"
                break
        }
    }

    turn++
    if (turn % 2 ==0){

        button.textContent = "Player 1 please roll the die"
}
    else{
        button.textContent = "Player 2 please roll the die"
    }





    if (player1 >= 21) {
        
        roll.textContent = `You have won with a score of ${player1}. player 2 shall now die!?`
        button.style.display = "none"
        reset.style.display = "inline"
    }


    if (player2 >= 21) {
        
        roll.textContent = `You have won with a score of ${player2}. player 1 shall now die!?`
        button.style.display = "none"
        reset.style.display = "inline"
}

})
document.addEventListener("click",(event)=>{

    if (event.target == reset) {

       window.location.reload(true)
    }
})