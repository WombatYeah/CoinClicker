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

    upgrade.owned = 0
    const ownedtag = document.createElement("div")
    ownedtag.className = "owned"
    ownedtag.innerText = upgrade.owned

    button.appendChild(imagetag)
    button.appendChild(divtag)
    button.appendChild(ownedtag)

    button.addEventListener("click", function () {
        upgrade = buyupgrade(upgrade)
        pricetag.innerText = "$" + upgrade.price
        ownedtag.innerText = upgrade.owned

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
        secondtag.innerText = "coins per second: " + scorepersecond
    }
    alert("you bought " + upgrade.name)

    coins -= upgrade.price
    p.innerText = "Coins: " + coins

    upgrade.owned += 1

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

function second(){

    coins += scorepersecond
    p.innerText = "Coins: " + coins

}


setInterval(second, 1000)


const secondtag = document.createElement("p")
secondtag.id="scorepersecond"
secondtag.innerText = "coins per second: " + scorepersecond
scorediv.appendChild(secondtag)



addupgradebutton({
    name: "Shovel",
    image: "Assets/upgrades/shovel.png",
    type: "click",
    stat: 1,
    price: 25
})
addupgradebutton({
    name: "Metal Detector",
    image: "Assets/upgrades/metaldetector.png",
    type: "second",
    stat: 1,
    price: 35
})
addupgradebutton({
    name: "Dual Shovel",
    image: "Assets/upgrades/dualshovel.png",
    type: "click",
    stat: 2,
    price: 40
})
addupgradebutton({
    name: "Spyglass",
    image: "Assets/upgrades/spyglass.png",
    type: "click",
    stat: 10,
    price: 150
})
addupgradebutton({
    name: "Map",
    image: "Assets/upgrades/map.png",
    type: "second",
    stat: 3,
    price: 90
})
addupgradebutton({
    name: "Map",
    image: "Assets/upgrades/compass.png",
    type: "second",
    stat: 11,
    price: 300
})