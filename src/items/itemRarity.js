const rarities = [
    {
        name: "Ordinary",
        color: "#2c2727",
        id: 0,
    },
    {
        name: "Unusual",
        color: "#0091d2",
        id: 1,
    },
    {
        name: "Extraordinary",
        color: "#bd00d2",
        id: 2,
    },
    {
        name: "Legendary",
        color: "#d20000",
        id: 3,
    },
    {
        name: "Mythical",
        color: "#ffcc00",
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