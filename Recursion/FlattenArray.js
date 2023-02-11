function flatten (array) {
    let newArray = [];

    for (let value of array) {
        if (Array.isArray(value))
            newArray = newArray.concat(flatten(value));
        else
            newArray.push(value);
    }
    return newArray;
}