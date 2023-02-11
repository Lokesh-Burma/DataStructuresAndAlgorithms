function capitalizeWords (string) {
    let newArray = [];

    if (Array.isArray(string))
        for (let value of string)
            newArray = newArray.concat(capitalizeWords(value));
    else
        newArray.push(string.toUpperCase());
    return newArray;
}

array = ['apple'];
console.log(capitalizeWords(array));