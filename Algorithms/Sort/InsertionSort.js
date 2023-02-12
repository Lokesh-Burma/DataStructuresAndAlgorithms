function InsertionSort (array) {
    for (let i=1; i<array.length; i++) {
        currentValue = array[i];
        let j = 0;
        for (j = i-1; j>=0 && array[j] > currentValue; j--) {
            array[j+1] = array[j];
        }
        array[j+1] = currentValue;
        console.log(j);
        console.log(array);
    }
    return array;
}

array = [10,89,56,20,6,7,80];
console.log(InsertionSort(array));