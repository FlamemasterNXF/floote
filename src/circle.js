const valueContainer = document.querySelector(".value-container")
let progressBar = document.getElementById("bar0")

function progress(x, diff){
    let progressValue = x >= 100 ? 100 : x

    valueContainer.textContent = `${format(progressValue)}%`
    progressBar.style.background = `conic-gradient(
      rgb(232, 139, 16) ${progressValue * 3.6}deg,
      #000 ${progressValue * 3.6}deg
    )`

    if(data.circle.progress >= 100) return data.circle.progress = 100
    data.circle.progress += (1+getCircleSpeedIncrease())*diff
}

function openLootbox(stack = 0){
    let canOpen = data.circle.progress >= 100
    let text = document.getElementById("lootboxText");

    if(!canOpen) text.innerHTML = `The Circle is not yet ready.`
    text.classList.add("fade-in");
    setTimeout(function () {
        text.classList.remove("fade-in");
    }, 2000);

    if(!canOpen) return

    let rarity = stack > 0 ? getRarity(stack) : getRarity(getRandom(1, 101))
    let item = getRandomItem(rarity.id)
    item.natural = true
    text.innerHTML = `You got a <span>${rarity.name} <b>${item.name}</b></span>!`
    text.children[0].style.color = rarity.color

    data.circle.progress = 0
    data.items[item.rarity].push(item)
}

// This function may seem unnecessary, but I'm keeping it in case I expand the Speed boost system in the future
function getCircleSpeedIncrease(){
    return getTotalRarityEffect()
}
