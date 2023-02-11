function linearSearch (array, searchValue) {
    for (let index = 0; index < array.length; index++) 
        if (array[index] === searchValue) return index;
    return -1;
}