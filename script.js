let score = document.getElementsByTagName("p")[1]
let roll = document.getElementsByTagName("p")[2]
let button = document.getElementById("roller")
let reset = document.getElementById("reset")
let dice = document.getElementById("dice")
let current = 0

document.addEventListener("click",(event)=> {
    if (event.target == button) {
        let num = Math.ceil(Math.random()*6)
        current+=num
        score.textContent = `Your current score is ${current}`
        switch (true) {
            case num == 1:
                roll.textContent = `You rolled a one! You suck kiddo, get outta here!`
                button.style.display = "none"
                reset.style.display = "inline"
                dice.style.backgroundImage = "url(img/dice1.png)"
                break
            case num == 2:
                roll.textContent = `You rolled  two!`
                dice.style.backgroundImage = "url(img/dice2.png)"
                break
            case num == 3:
                roll.textContent = `You rolled  three!`
                dice.style.backgroundImage = "url(img/dice3.png)"
                break
            case num == 4:
                roll.textContent = `You rolled  four!`
                dice.style.backgroundImage = "url(img/dice4.png)"
                break
            case num == 5:
                roll.textContent = `You rolled  five!`
                dice.style.backgroundImage = "url(img/dice5.png)"
                break
            case num == 6:
                roll.textContent = `You rolled  six!`
                dice.style.backgroundImage = "url(img/dice6.png)"
                break
        }
    }
    if (current >= 21) {
        roll.textContent = `You have won with a score of ${current}. Double or nothing?`
        button.style.display = "none"
        reset.style.display = "inline"
    }
})

document.addEventListener("click",(event)=>{
    if (event.target == reset) {
       window.location.reload(true)
    }
})




