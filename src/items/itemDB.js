const items = [
    // Rarity 0
    [
        {
            name: "Broken Wheel",
            desc: "A shattered, useless circle.",
            icon: "../../res/placeholder.png",
        },
        {
            name: "Burnt Match",
            desc: "Once upon a time, there was warmth.",
            icon: "../../res/placeholder.png",
        },
        {
            name: "Shattered Plate",
            desc: "Pick up the pieces.",
            icon: "../../res/placeholder.png",
        },
    ],

    // Rarity 1
    [
        {
            name: "Golden Coin",
            desc: "A valuable item.",
            icon: "../../res/placeholder.png",
        },
        {
            name: "Circle Statue",
            desc: "Imitation of Greatness.",
            icon: "../../res/placeholder.png",
        },
        {
            name: "Cube",
            desc: "Inferior Form.",
            icon: "../../res/placeholder.png",
        },
    ],

    // Rarity 2
    [
        {
            name: "Great Wheel",
            desc: "A strong circle, but one used for a lesser purpose.",
            icon: "../../res/placeholder.png",
        },
        {
            name: "Cup of Water",
            desc: "It seems to never be empty.",
            icon: "../../res/placeholder.png",
        },
        {
            name: "Glasses",
            desc: "To more closely observe.",
            icon: "../../res/placeholder.png",
        },
    ],

    // Rarity 3
    [
        {
            name: "Golden Compass",
            desc: "Find your way.",
            icon: "../../res/placeholder.png",
        },
        {
            name: "Eternal Flame",
            desc: "Warmth for an empty world.",
            icon: "../../res/placeholder.png",
        },
        {
            name: "Miniature Circle",
            desc: "Forever Spinning.",
            icon: "../../res/placeholder.png",
        },
    ],

    // Rarity 4
    [
        {
            name: "Light",
            desc: "Vision is key, after all.",
            icon: "../../res/placeholder.png",
        },
        {
            name: "Thought",
            desc: "Understanding.",
            icon: "../../res/placeholder.png",
        },
        {
            name: "Wilted Clover",
            desc: "Unknown Purpose.",
            icon: "../../res/placeholder.png",
        },
    ],
]

function getRandomItem(rarity){
    let range = items[rarity].length
    return items[rarity][getRandom(0, range)]
}