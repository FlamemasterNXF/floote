function updateAnnihilationTexts(){
    for (let i = 0; i < 4; i++) {
        let rarity = rarities[i]
        let nextRarity = rarities[i+1]
        if(data.items[i].length < 3){
            DOM(`annihilation${i}`).innerHTML = `<span>${rarity.name} ANNIHILATION</span> cannot be performed.`
            colorizeAnnihilationTexts(rarity, nextRarity, false)
            continue
        }
        DOM(`annihilation${i}`).innerHTML = `<span>ANNIHILATE ${Math.floor(data.items[i].length/3)*3} ${rarity.name}</span> Items for <span>${Math.floor(data.items[i].length/3)} ${nextRarity.name}</span> Items`
        colorizeAnnihilationTexts(rarity, nextRarity, true)
    }
}
function colorizeAnnihilationTexts(rarity, nextRarity, extended){
    let color = rarity.id === 0 ? '#969696' : rarity.color

    DOM(`annihilation${rarity.id}`).children[0].style.color = color

    if(extended) DOM(`annihilation${rarity.id}`).children[1].style.color = nextRarity.color
}

function annihilate(i){
    let amountGained = Math.floor(data.items[i].length/3)
    let gainedItemNames = []
    if(amountGained < 1) return

    for (let j = 0; j < amountGained; j++) {
        let item = getRandomItem(i+1)
        item.natural = false
        data.items[i+1].push(item)
        gainedItemNames.push(item.name)
    }

    data.items[i] = data.items[i].splice(amountGained*3)

    let text = document.getElementById("annihilationGainText");
    text.classList.add("fade-in");
    setTimeout(function () {
        text.classList.remove("fade-in");
    }, 3000);

    text.innerHTML = `You got a <span>${rarities[i+1].name} <b>${generateAnnihilationGainText(gainedItemNames)}</b></span>!`
    text.children[0].style.color = rarities[i+1].color

    updateAnnihilationTexts()
}

function generateAnnihilationGainText(gainedItemNames){
    let bound = gainedItemNames.length

    if(bound === 1) return gainedItemNames[0]
    if(bound === 2) return `${gainedItemNames[0]} and ${gainedItemNames[1]}`

    let text = ""
    for (let i = 0; i < bound; i++) {
        text += `${gainedItemNames[i]}`
        if(i === bound - 1) continue

        if(i === bound - 2) text += ', and '
        else text += ', '
    }

    return text
}