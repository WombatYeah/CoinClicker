let coins = 0
const p = document.getElementById("score")
p.innerText = "Coins: " + coins

const upgradediv = document.getElementById("upgradediv")





function addcoin (count){

    coins += count
    p.innerText = "Coins: " + coins

}


function addupgradebutton (name,image,type,stat,price){

    const button = document.createElement("button")
    button.className = ("upgrade")
    const imagetag = document.createElement("img")    

    imagetag.src=image
    
    const divtag = document.createElement("div")

    const nametag = document.createElement("p")

    nametag.innerText = name

    const stattag = document.createElement("p")

    if (type == "click"){

        stattag.innerText = stat + " per click"
    }

    else {

        stattag.innerText = stat + " per second"
    }

    const pricetag = document.createElement("p")

    pricetag.innerText = "$" + price

    divtag.appendChild(nametag)
    divtag.appendChild(stattag)
    divtag.appendChild(pricetag)

    button.appendChild(imagetag)
    button.appendChild(divtag)

    upgradediv.appendChild(button)

}


addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")
addupgradebutton("name","Assets/Gold_Doubloon.png","click","1","100")