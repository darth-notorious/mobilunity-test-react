export function invertColor(hexTripletColor) {
    let color = parseInt(hexTripletColor.substring(1), 16);
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = "#" + ("000000" + color.toString(16)).slice(-6); // pad with leading zeros
    return color;
}