function bubbleSort (array) {
    for (let i=array.length; i>0; i--) {
        let notSwapped = true;
        for (let j=0; j<i-1; j++) {
            console.log(i,j);
            if (array[j]>array[j+1]) {
                [array[j],array[j+1]] = [array[j+1],array[j]];
                notSwapped = false;
            }
        }
        if (notSwapped) break;
    }
}

bubbleSort([10, 8, 20, 25, 17, 34]);