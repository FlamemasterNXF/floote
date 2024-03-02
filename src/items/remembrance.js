let remembranceReq = 6
function makeRemembrance(){
    for (let i = 0; i < remembranceReq; i++) {
        let hasClover = getClovers() > i

        let rem = document.createElement('button')
        rem.className = `remembrance`
        rem.style.border = `1px solid ${hasClover ? '#3f943f' : '#606060'}`

        let icon = document.createElement('img')
        icon.src = hasClover ? `res/items/wilted_clover.png` : `res/other/missing_clover.png`

        rem.append(icon)
        document.getElementById('remContainer').append(rem)
    }

    DOM(`remember`).style.display = getClovers() >= remembranceReq ? 'block' : 'none'
}
function refreshRemembrance(){
    document.getElementById(`remContainer`).replaceChildren()
    makeRemembrance()
}
function getClovers(){
    let amount = 0
    for (let i = 0; i < data.items[4].length; i++) {
        if(data.items[4][i].name === "Wilted Clover") amount++
    }
    return amount
}

function remember(){
    if(getClovers() < remembranceReq) return

    let clover = getRandomItem(5)
    clover.natural = true
    data.items[5].push(clover)

    let removed = 0
    for (let i = 0; i < data.items[4].length; i++) {
        if(removed >= remembranceReq) break;
        if(data.items[4][i].name === "Wilted Clover"){
            data.items[4] = data.items[4].slice(0, i).concat(data.items[4].slice(i+1))
            removed++
        }
    }
    refreshRemembrance()
}