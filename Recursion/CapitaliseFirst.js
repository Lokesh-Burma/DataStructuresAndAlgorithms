function capitalizeFirst (string) {
    let newArray = [];

    if (Array.isArray(string))
        for (let value of string)
            newArray = newArray.concat(capitalizeFirst(value));
    else
        newArray.push(string.charAt(0).toUpperCase() + string.slice(1));
    return newArray;
}

array = ['apple'];
console.log(capitalizeFirst(array));