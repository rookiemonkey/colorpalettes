import chroma from 'chroma-js';
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const generatePalette = palette => {
    let newPalette = {
        paletteName: palette.paletteName,
        id: palette.id,
        emoji: palette.emoji,
        colors: {}
    }

    // create a key as the level and set its value to an empty array
    for (let level of levels) {
        newPalette.colors[level] = []
    }

    // saves color inside the colors property an array-of-object colors
    for (let color of palette.colors) {
        let scale = getScale(color.color, 10).reverse();
        for (let i in scale) {
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, "-"),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace("rgb", "rgba").replace(")", ",1.0)")
            })
        }
    }

    return newPalette
}

// get range of colors (in hex) depending on the color passed in
const getRange = hexColor => {
    const end = "#fff"
    const start = chroma(hexColor).darken(1.4).hex();
    return [start, hexColor, end]
}

// scales the color depending on the mode / num of colors provided
const getScale = (hexColor, numOfColors) => {
    return chroma
        .scale(getRange(hexColor))
        .mode('lab')
        .colors(numOfColors)
}

export default generatePalette;