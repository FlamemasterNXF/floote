const items = [
    // Rarity 0
    [
        {
            name: "Broken Wheel",
            desc: "A shattered, useless circle.",
            icon: "res/placeholder.png",
            rarity: 0,
        },
        {
            name: "Burnt Match",
            desc: "Once upon a time, there was warmth.",
            icon: "res/placeholder.png",
            rarity: 0,

        },
        {
            name: "Shattered Plate",
            desc: "Pick up the pieces.",
            icon: "res/placeholder.png",
            rarity: 0,

        },
    ],

    // Rarity 1
    [
        {
            name: "Golden Coin",
            desc: "A valuable item.",
            icon: "res/placeholder.png",
            rarity: 1,

        },
        {
            name: "Circle Statue",
            desc: "Imitation of Greatness.",
            icon: "res/placeholder.png",
            rarity: 1,

        },
        {
            name: "Cube",
            desc: "Inferior Form.",
            icon: "res/placeholder.png",
            rarity: 1,

        },
    ],

    // Rarity 2
    [
        {
            name: "Great Wheel",
            desc: "A strong circle, but one used for a lesser purpose.",
            icon: "res/placeholder.png",
            rarity: 2,

        },
        {
            name: "Cup of Water",
            desc: "It seems to never be empty.",
            icon: "res/placeholder.png",
            rarity: 2,

        },
        {
            name: "Glasses",
            desc: "To more closely observe.",
            icon: "res/placeholder.png",
            rarity: 2,

        },
    ],

    // Rarity 3
    [
        {
            name: "Golden Compass",
            desc: "Find your way.",
            icon: "res/placeholder.png",
            rarity: 3,

        },
        {
            name: "Eternal Flame",
            desc: "Warmth for an empty world.",
            icon: "res/placeholder.png",
            rarity: 3,

        },
        {
            name: "Miniature Circle",
            desc: "Forever Spinning.",
            icon: "res/placeholder.png",
            rarity: 3,

        },
    ],

    // Rarity 4
    [
        {
            name: "Light",
            desc: "Vision is key, after all.",
            icon: "res/placeholder.png",
            rarity: 4,

        },
        {
            name: "Thought",
            desc: "Understanding.",
            icon: "res/placeholder.png",
            rarity: 4,

        },
        {
            name: "Wilted Clover",
            desc: "Unknown Purpose.",
            icon: "res/wilted_clover.png",
            rarity: 4,

        },
    ],

    // Rarity 5 (Unobtainable)
    [
        {
            name: "Four-Leaf Clover",
            desc: "Chance Incarnate. You have created the Impossible.",
            icon: "res/clover.png",
            rarity: 5,

        },
    ]
]

function getRandomItem(rarity){
    let range = items[rarity].length
    return items[rarity][getRandom(0, range)]
}