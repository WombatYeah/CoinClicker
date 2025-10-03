let coins = 0
const p = document.getElementById("coins")
p.innerText = "Coins: " + coins


function addcoin (count){

    coins += count
    p.innerText = "Coins: " + coins

}