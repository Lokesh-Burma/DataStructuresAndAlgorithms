/*
Q. Write a function called sameFrequency. Given two positive integers, 
    find out if the two numbers have the same frequency of digits.
A. Extract the digits from integer using modulus and store in array
    then use frequency counter
*/

function extractIntegers (num) {
    if (num<10) return [num];

    let extractedArray = [];
    let remainder = 0;
    do {
        remainder = num % 10;
        extractedArray.push(remainder);
        num = Math.floor(num / 10);
    } while (num !== 0);

    return extractedArray;
}

function checkFrequency (num1, num2) {
    let array1 = extractIntegers(num1);
    let array2 = extractIntegers(num2);

    if (array1.length !== array2.length) return false;
    let obj1 = {};
    let obj2 = {};

    for (let value of array1) 
        obj1[value] = (obj1[value] || 0) + 1;
    for (let value of array2) 
        obj2[value] = (obj2[value] || 0) + 1;

    for (let value in obj1)
        if (!(value in obj2) || obj1[value] !== obj2[value]) return false;
    return true;
}


console.log(checkFrequency(15643, 34651));