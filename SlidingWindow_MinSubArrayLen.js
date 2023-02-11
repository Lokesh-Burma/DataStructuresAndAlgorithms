function minSubArrayLen (array1, minSum) {
    let tempSum = 0;
    for (let i=0; i<array1.length; i++) {
        if (array1[i]>=7) return 1;
    }

    for (let i=0; i<array1.length-1; i++) {
        if (array1[i]+array1[i+1]>=7) return 2;
    }

    for (let i=0; i<array1.length-2; i++) {
        if (array1[i]+array1[i+1]+array1[i+2]>=7) return 3;
    }

    for (let i=0; i<array1.length-3; i++) {
        if (array1[i]+array1[i+1]+array1[i+2]>=7) return 4;
    }

    for (let i=0; i<array1.length-4; i++) {
        if (array1[i]+array1[i+1]+array1[i+2]>=7) return 5;
    }

    for (let i=0; i<array1.length-5; i++) {
        if (array1[i]+array1[i+1]+array1[i+2]>=7) return 6;
    }
    return false;
}

array1 = [2,3,1,2,4,3];
minSum = 7;

console.log(minSubArrayLen(array1, minSum));