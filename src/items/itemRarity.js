const rarities = [
    {
        name: "Ordinary",
        color: "#2c2727",
        effectDesc: "Increases Circle Speed by 0.01.",
        effect: 0.01,
        id: 0,
    },
    {
        name: "Unusual",
        color: "#0091d2",
        effectDesc: "Increases Circle Speed by 0.04.",
        effect: 0.04,
        id: 1,
    },
    {
        name: "Extraordinary",
        color: "#bd00d2",
        effectDesc: "Increases Circle Speed by 0.16.",
        effect: 0.16,
        id: 2,
    },
    {
        name: "Legendary",
        color: "#d20000",
        effectDesc: "Increases Circle Speed by 0.64.",
        effect: 0.64,
        id: 3,
    },
    {
        name: "Mythical",
        color: "#ffcc00",
        effectDesc: "Increases Circle Speed by 2.56.",
        effect: 2.56,
        id: 4,
    },
    {
        name: "",
        color: "lightgreen",
        effectDesc: "",
        effect: 0,
        id: 4,
    },
]

function getRarity(value){
    if(value === 1) return rarities[4] // 1%
    else if(value > 1 && value <= 6) return rarities[3] // 5%
    else if(value > 6 && value <= 16) return rarities[2] // 10%
    else if(value > 16 && value <= 41) return rarities[1] // 25%
    else if(value > 41) return rarities[0] // 59%
}

let getRarityEffect = (i) => data.items[i].length*rarities[i].effect
function getTotalRarityEffect(){
    let total = 0
    for (let i = 0; i < rarities.length; i++) {
        total += getRarityEffect(i)
    }
    return total
}