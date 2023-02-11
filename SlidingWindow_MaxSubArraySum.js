function maxSubArraySum (array1, window) {
    let maxSum = 0;
    let tempSum = 0;

    if(array1.length < window) return null;

    for (let i=0; i < window; i++)
        maxSum += array1[i];
    
    tempSum = maxSum;
    for (let j=window; j<array1.length; j++) {
        tempSum = tempSum + array1[j] - array1[j-window];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

array1 = [2,6,9,2,1,8,5,6,3];
window = 3;

console.log(maxSubArraySum(array1, window));