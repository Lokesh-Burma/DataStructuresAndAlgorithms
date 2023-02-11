function selectionSort (array) {
    for (let i=0; i<array.length-1; i++) {
        let minValueIndex = i;
        for (let j=i+1; j<array.length; j++)
            if (array[j] < array[minValueIndex])
                minValueIndex = j;

        if (minValueIndex !== i)
            [array[i], array[minValueIndex]] = [array[minValueIndex],array[i]];
    }
    return array;
}

array = [10,89,56,20,6,7,1];
console.log(selectionSort(array));
