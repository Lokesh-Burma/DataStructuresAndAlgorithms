function someRecursive(array1, callback) {
    if (array1.length === 0) return false;
    if (callback(array1[0])) return true;

    return someRecursive(array1.slice(1), callback);
}