/*
Q. Check whether the characters in the first string form the subsequence in the second string
*/

function isSubsequence(str1,str2) {
    let array1 = str1.split("");
    let array2 = str2.split("");

    let pointer1 = 0;
    let pointer2 = 0;
    while (pointer1<array1.length || pointer2<array2.length) {
        if (array1[pointer1] === array2[pointer2]){
            pointer1++;
        }
        if (pointer1 === array1.length)
            return true;
        pointer2++;
    }
    return false;
}

str1 = 'abc';
str2 = 'abracadabra';
console.log(isSubsequence(str1, str2));