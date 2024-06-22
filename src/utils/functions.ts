/**
 * 
 * @param txt - The text that need to slice
 * @param max - max length to slice the text
 * @returns - text with the max- length
 */

export function txtslice(txt: string, max: number = 50){
    if(txt.length >= 50) return `${txt.slice(0, max)} ...`;
    return txt;
}