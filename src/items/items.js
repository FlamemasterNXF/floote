function makeItems(){
    let pushed = 0
    let rowNum = 0

    let firstRow = document.createElement('div')
    firstRow.id = `itemRow0`
    firstRow.style.marginTop = '4rem'
    document.getElementById('itemRowContainer').append(firstRow)

    for (let i = 0; i < data.items.length; i++) {
        let item = document.createElement('button')
        let rarity = rarities[data.items[i].rarity]
        item.style.border = `1px solid ${rarity.color}`
        item.style.background = 'black'
        item.style.marginLeft = `0.2rem`
        item.style.marginRight = `0.2rem`
        item.setAttribute("tooltip", `A ${rarity.name} ${data.items[i].name}\n\n"${data.items[i].desc}"`)

        let icon = document.createElement('img')
        icon.src = `${data.items[i].icon}`

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