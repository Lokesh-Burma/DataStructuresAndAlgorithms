/*
Q. Given a sorted array, find out the pair whose sum is 0
A. start a pointer from both ends and check for the sum of the values, 
    if value is +ve decrement right pointer else left pointer 
*/

"use strict";

function sumZero (array1) {
    let leftPointer = 0;
    let rightPointer = array1.length - 1;

    while (leftPointer < rightPointer) {
        let sum = array1[leftPointer] + array1[rightPointer];
        if ( sum === 0)
            return [array1[leftPointer], array1[rightPointer]];
        else if (sum > 0)
            rightPointer--;
        else
            leftPointer++;
    }
}

array1 = [-4,-3,-2,-1,0,1,2,3,7,10];
console.log(sumZero(array1));