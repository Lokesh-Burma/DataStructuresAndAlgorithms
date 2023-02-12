function swap (array, index1, index2) {
    [array[index1], array[index2]] = [array[index2],array[index1]];
}

function pivot (array, start = 0, end = array.length-1) {
    let pivotValue = array[start];
    let countValuesLessThanPivot = start;

    for (let index=start+1; index <= end; index++) {
        if (pivotValue > array[index]) {
            countValuesLessThanPivot++;
            if (countValuesLessThanPivot !== index) 
                swap(array, countValuesLessThanPivot, index);
            console.log(array);
        }
    }

    swap(array, start, countValuesLessThanPivot);
    console.log(array);
    return countValuesLessThanPivot;
}

function quickSort(array, left = 0, right = array.length-1) {
    if (left < right) {
        let pivotIndex = pivot (array, left, right);
        quickSort(array, left, pivotIndex-1);
        quickSort(array,pivotIndex+1,right);
    }
    return array;
}

console.log(quickSort ([100,-3,101,4,6,9,1,2,5,3,23]));