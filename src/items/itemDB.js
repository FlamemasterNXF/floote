const items = [
    // Rarity 0
    [
        {
            name: "Broken Wheel",
            desc: "A shattered, useless circle.",
            natural: false,
            rarity: 0,
        },
        {
            name: "Burnt Match",
            desc: "Once upon a time, there was warmth.",
            natural: false,
            rarity: 0,
        },
        {
            name: "Shattered Plate",
            desc: "Pick up the pieces.",
            natural: false,
            rarity: 0,
        },
    ],

    // Rarity 1
    [
        {
            name: "Golden Coin",
            desc: "A valuable item.",
            natural: false,
            rarity: 1,
        },
        {
            name: "Circle Statue",
            desc: "Imitation of Greatness.",
            natural: false,
            rarity: 1,
        },
        {
            name: "Cube",
            desc: "Inferior Form.",
            natural: false,
            rarity: 1,
        },
    ],

    // Rarity 2
    [
        {
            name: "Great Wheel",
            desc: "A strong circle, but one used for a lesser purpose.",
            natural: false,
            rarity: 2,
        },
        {
            name: "Cup of Water",
            desc: "It seems to never be empty.",
            natural: false,
            rarity: 2,
        },
        {
            name: "Glasses",
            desc: "To more closely observe.",
            natural: false,
            rarity: 2,
        },
    ],

    // Rarity 3
    [
        {
            name: "Golden Compass",
            desc: "Find your way.",
            natural: false,
            rarity: 3,
        },
        {
            name: "Eternal Flame",
            desc: "Warmth for an empty world.",
            natural: false,
            rarity: 3,
        },
        {
            name: "Miniature Circle",
            desc: "Forever Spinning.",
            natural: false,
            rarity: 3,
        },
    ],

    // Rarity 4
    [
        {
            name: "Light",
            desc: "Vision is key, after all.",
            natural: false,
            rarity: 4,
        },
        {
            name: "Thought",
            desc: "Understanding.",
            natural: false,
            rarity: 4,
        },
        {
            name: "Wilted Clover",
            desc: "Unknown Purpose.",
            natural: false,
            rarity: 4,
        },
    ],

    // Rarity 5 (Unobtainable)
    [
        {
            name: "Four-Leaf Clover",
            desc: "Chance Incarnate. You have created the Impossible.",
            natural: false,
            rarity: 5,
        },
    ]
]

const itemIcons = {
    "Broken Wheel" : "res/items/broken_wheel.png",
    "Burnt Match" : "res/items/burnt_match.png",
    "Shattered Plate" : "res/items/broken_plate.png",

    "Golden Coin" : "res/items/golden_coin.png",
    "Circle Statue" : "res/items/circle_statue.png",
    "Cube" : "res/items/cube.png",

    "Great Wheel" : "res/items/greater_wheel.png",
    "Cup of Water" : "res/items/water_glass.png",
    "Glasses" : "res/items/glasses.png",

    "Golden Compass" : "res/items/golden_compass.png",
    "Eternal Flame" : "res/items/bad_flame.png",
    "Miniature Circle" : "res/items/mini_circle.png",

    "Light" : "res/items/light.png",
    "Thought" : "res/items/thought.png",
    "Wilted Clover" : "res/items/wilted_clover.png",

    "Four-Leaf Clover" : "res/items/clover.png",
}

function getRandomItem(rarity){
    let range = items[rarity].length
    return {
        ...items[rarity][getRandom(0, range)]
    }
}

let getItemSprite = (name) => itemIcons[name]