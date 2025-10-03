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

    button.addEventListener("click", function () {
        upgrade = buyupgrade(upgrade)
        pricetag.innerText = "$" + upgrade.price

    })
    
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

    upgrade.price *= 1.3
    upgrade.price = Math.ceil(upgrade.price)

    }

    else{

        alert("you're too poor")

    }

    return upgrade
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