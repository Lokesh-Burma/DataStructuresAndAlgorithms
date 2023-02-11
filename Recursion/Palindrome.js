function isPalindrome (Str) {
    if (Str.length === 1)
        return true;
    if (Str.length === 2) 
        return Str[0]===Str[1];
    if (Str[0] === Str.slice(-1)) 
        return isPalindrome(Str.slice(1,-1))
    return false;

}

Str = 'NOON';
console.log(isPalindrome(Str));