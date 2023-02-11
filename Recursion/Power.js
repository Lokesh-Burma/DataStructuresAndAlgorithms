function power(base, exponent) {
    if (exponent !== 0)
        return base*power(base, exponent-1);
    else
        return 1;
}

console.log(power(2,4));