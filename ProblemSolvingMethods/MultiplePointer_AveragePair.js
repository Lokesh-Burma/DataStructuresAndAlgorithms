/*
Q. Write a function called averagePair. Given a sorted array and a target average, 
determine the average of the pair equals the target average. There may be more than one pair
that matches the target average.

A. 
*/

function averagePair(sortedArray, averageValue) {
    if (sortedArray.length < 1) return false;
    let leftPointer = 0;
    let rightPointer = sortedArray.length-1;

    while (leftPointer < rightPointer) {
        let calculatedValue = (sortedArray[leftPointer]+sortedArray[rightPointer])/2;
        if ( calculatedValue === averageValue )
            return true;
        else if ( calculatedValue < averageValue )
            leftPointer++;
        else
            rightPointer--;
    }
    return false;
}

sortedArray = [1,3,3,5,6,7,10,12,19];
averageValue = 8;
console.log(averagePair(sortedArray, averageValue));