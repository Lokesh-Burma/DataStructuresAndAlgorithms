function InsertionSort (array) {
    for (let i=1; i<array.length; i++) {
        pointer = i;
        for (let j=i-1; j>=0; j--) {
            if (array[j] > array[pointer]) {
                [array[j],array[pointer]] = [array[pointer],array[j]];
                pointer = j;
            }
        }
    }
}

array = [10,89,56,20,6,7,1];
console.log(InsertionSort(array));