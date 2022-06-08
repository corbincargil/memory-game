//function that takes an array as an argument and shuffles the array elements

import cards from "./cards";

export default function shuffle(array) {
    let currentElement = array.length, swappedElement;
    
    while (currentElement != 0) {
        swappedElement = Math.floor(Math.random()*currentElement);
        currentElement--;

        [array[currentElement], array[swappedElement]] = [array[swappedElement], array[currentElement]];
    }
    return array;
}