"use strict";
/*
Q. Given 2 arrays check 
    1. if the 2nd array has square of elements in the 1st array
    2. frequency is same
A. Frequency counter method
    use 2 objects to store the frequency of the values of 2 arrays
    loop through the 1st object and check for the key and frequency in 2nd array
*/
function same(array1, array2) {
    if (array1.length !== array2.length)
        return false;

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let value of array1)
        frequencyCounter1[value] = (frequencyCounter1[value] || 0 ) + 1;

    for (let value of array2)
        frequencyCounter2[value] = (frequencyCounter2[value] || 0 ) + 1;

    for (let key in frequencyCounter1) {
        if (!(key**2 in frequencyCounter2))
            return false;
        if (frequencyCounter2[key**2] !== frequencyCounter1[key])
            return false;
    }
    return true;
}

let array1 = [1,2,3];
let array2 = [1,4,9];
console.log(same(array1, array2));