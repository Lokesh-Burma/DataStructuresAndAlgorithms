function areThereDuplicates (...args) {
    let obj1 = {};

    for (let value of args) {
        if (value in obj1) return true;
        obj1[value] = 1;
    }
    return false;
}

console.log(areThereDuplicates(1,2,3,4,4));