export const adjustHutSize = () => {
    let scale;
    const position = [0, -50.5, -150];
    const rotation = [0, 0, 0]

    scale = window.innerWidth < 768 ? [2,2,2] : [5,5,5]

    return [scale, position, rotation]
}