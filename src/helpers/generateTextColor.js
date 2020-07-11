import chroma from 'chroma-js';

const generateTextColor = color => {
    const luminosity = chroma(color).luminance();
    if (luminosity < 0.5) { return 'white' }
    else { return 'black' }
}

export default generateTextColor;