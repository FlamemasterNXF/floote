const items = [
    // Rarity 0
    [
        {
            name: "Broken Wheel",
            desc: "A shattered, useless circle.",
            icon: "res/items/placeholder.png",
            natural: false,
            rarity: 0,
            id: 0,
        },
        {
            name: "Burnt Match",
            desc: "Once upon a time, there was warmth.",
            icon: "res/items/placeholder.png",
            natural: false,
            rarity: 0,
            id: 1,
        },
        {
            name: "Shattered Plate",
            desc: "Pick up the pieces.",
            icon: "res/items/placeholder.png",
            natural: false,
            rarity: 0,
            id: 2,
        },
    ],

    // Rarity 1
    [
        {
            name: "Golden Coin",
            desc: "A valuable item.",
            icon: "res/items/placeholder.png",
            natural: false,
            rarity: 1,
            id: 0,
        },
        {
            name: "Circle Statue",
            desc: "Imitation of Greatness.",
            icon: "res/items/placeholder.png",
            natural: false,
            rarity: 1,
            id: 1,
        },
        {
            name: "Cube",
            desc: "Inferior Form.",
            icon: "res/items/placeholder.png",
            natural: false,
            rarity: 1,
            id: 2,
        },
    ],

    // Rarity 2
    [
        {
            name: "Great Wheel",
            desc: "A strong circle, but one used for a lesser purpose.",
            icon: "res/items/placeholder.png",
            natural: false,
            rarity: 2,
            id: 0,
        },
        {
            name: "Cup of Water",
            desc: "It seems to never be empty.",
            icon: "res/items/placeholder.png",
            natural: false,
            rarity: 2,
            id: 1,
        },
        {
            name: "Glasses",
            desc: "To more closely observe.",
            icon: "res/items/placeholder.png",
            natural: false,
            rarity: 2,
            id: 2,
        },
    ],

    // Rarity 3
    [
        {
            name: "Golden Compass",
            desc: "Find your way.",
            icon: "res/items/placeholder.png",
            natural: false,
            rarity: 3,
            id: 0,
        },
        {
            name: "Eternal Flame",
            desc: "Warmth for an empty world.",
            icon: "res/items/placeholder.png",
            natural: false,
            rarity: 3,
            id: 1,
        },
        {
            name: "Miniature Circle",
            desc: "Forever Spinning.",
            icon: "res/items/placeholder.png",
            natural: false,
            rarity: 3,
            id: 2,
        },
    ],

    // Rarity 4
    [
        {
            name: "Light",
            desc: "Vision is key, after all.",
            icon: "res/items/placeholder.png",
            natural: false,
            rarity: 4,
            id: 0,
        },
        {
            name: "Thought",
            desc: "Understanding.",
            icon: "res/items/placeholder.png",
            natural: false,
            rarity: 4,
            id: 1,
        },
        {
            name: "Wilted Clover",
            desc: "Unknown Purpose.",
            icon: "res/items/wilted_clover.png",
            natural: false,
            rarity: 4,
            id: 2,
        },
    ],

    // Rarity 5 (Unobtainable)
    [
        {
            name: "Four-Leaf Clover",
            desc: "Chance Incarnate. You have created the Impossible.",
            icon: "res/items/clover.png",
            natural: false,
            rarity: 5,
            id: 0,
        },
    ]
]

function getRandomItem(rarity){
    let range = items[rarity].length
    return {
        ...items[rarity][getRandom(0, range)]
    }
}