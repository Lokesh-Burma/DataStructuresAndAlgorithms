function reverse (Str) {
    if (Str.length <= 1)
        return Str;
    return reverse(Str.slice(1)) + Str[0];
}

Str = 'ABCDE';
console.log(reverse(Str));