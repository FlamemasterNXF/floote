function makeItems(){
    let pushed = 0
    let rowNum = 0

    let firstRow = document.createElement('div')
    firstRow.id = `itemRow0`
    firstRow.style.marginTop = '4rem'
    document.getElementById('itemRowContainer').append(firstRow)

    for (let i = data.items.length-1; i > 0-1; i--) {
        for (let j = 0; j < data.items[i].length; j++) {
            let item = document.createElement('button')
            let rarity = rarities[data.items[i][j].rarity]

            if(data.items[i][j].natural) item.style.boxShadow = `0px 0px 10px 0px ${rarity.color}`
            item.style.border = `1px solid ${rarity.color}`
            item.style.background = 'black'
            item.style.marginLeft = `0.4rem`
            item.style.marginRight = `0.4rem`

            item.setAttribute("tooltip", `A ${rarity.name} ${data.items[i][j].name}${i !== 5 ? `\n${rarity.effectDesc}` : ``}\n\n"${data.items[i][j].desc}"`)

            let icon = document.createElement('img')
            icon.src = `${getItemSprite(data.items[i][j].name)}`

            item.append(icon)
            document.getElementById(`itemRow${rowNum}`).append(item)

            pushed++
            if(pushed >= 8){
                let row = document.createElement('div')
                rowNum++
                row.id = `itemRow${rowNum}`
                row.style.marginTop = '0.5rem'
                document.getElementById(`itemRowContainer`).append(row)
                pushed = 0
            }
        }
    }
}

function getTotalItems(bound = data.items.length){
    let total = 0
    for (let i = 0; i < bound; i++) {
        total += data.items[i].length
    }
    return total
}