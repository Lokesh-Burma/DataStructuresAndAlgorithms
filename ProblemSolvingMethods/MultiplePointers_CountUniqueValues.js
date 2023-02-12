/*
Q. Implement a function which accepts sorted array amd counts the unique values in the array.
A. 
*/

"use strict";

function countUniqueValues (sortedAray) {
    if (sortedAray.length === 0) 
        return 0;

    let initialPointer = 0;
    let nextPointer = 1;

    while (nextPointer < sortedAray.length) {
        if (sortedAray[initialPointer] === sortedAray[nextPointer])
            nextPointer++;
        else {
            initialPointer++;
            sortedAray[initialPointer] = sortedAray[nextPointer++];
        }
    }
    return initialPointer + 1;
}

let sortedAray = [1,1,2,3,4,4,5];
console.log(countUniqueValues(sortedAray));