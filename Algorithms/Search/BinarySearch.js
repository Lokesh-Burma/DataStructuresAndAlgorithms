function binarySearch (array, value) {
    let leftPointer = 0;
    let rightPointer = array.length-1;
    midPointer = Math.floor((rightPointer + leftPointer)/2);

    while (array[midPointer] !== value && leftPointer <= rightPointer) {
        if (value < array[midPointer])
            rightPointer = midPointer-1;
        else
            leftPointer = midPointer+1;
        midPointer = Math.floor((rightPointer + leftPointer)/2);
    }
    return (value === array[midPointer]) ? midPointer : -1;
}

array = [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ];

console.log(binarySearch(array, 10));