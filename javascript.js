let coins = 0
const p = document.getElementById("score")
p.innerText = "Coins: " + coins

const upgradediv = document.getElementById("upgradediv")





function addcoin(){

    coins += scoreperclick
    p.innerText = "Coins: " + coins

}


function addupgradebutton (upgrade){

    const button = document.createElement("button")
    button.className = ("upgrade")
    const imagetag = document.createElement("img")    

    imagetag.src=upgrade.image
    
    const divtag = document.createElement("div")

    const nametag = document.createElement("p")

    nametag.innerText = upgrade.name

    const stattag = document.createElement("p")

    if (upgrade.type == "click"){

        stattag.innerText = "+$" + upgrade.stat + " per click"
    }

    else {

        stattag.innerText = "+$" + upgrade.stat + " per second"
    }

    const pricetag = document.createElement("p")

    pricetag.innerText = "$" + upgrade.price

    divtag.appendChild(nametag)
    divtag.appendChild(stattag)
    divtag.appendChild(pricetag)

    button.appendChild(imagetag)
    button.appendChild(divtag)

    button.addEventListener("click", function () {buyupgrade(upgrade)})

    upgradediv.appendChild(button)

}

function buyupgrade (upgrade) {

    if (coins >= upgrade.price){

    if (upgrade.type == "click"){
        scoreperclick += upgrade.stat
    }

    else{
        scorepersecond += upgrade.stat
    }
    alert("you bought " + upgrade.name)

    coins -= upgrade.price
    p.innerText = "Coins: " + coins

    }

    else{

        alert("you're too poor")

    }

    

}



let scorepersecond = 0
let scoreperclick = 1


addupgradebutton({
    name: "Shovel",
    image: "Assets/upgrades/shovel.png",
    type: "click",
    stat: 1,
    price: 25
})
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")