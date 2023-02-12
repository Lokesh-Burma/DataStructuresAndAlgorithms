"use strict";

function isAnagram (word1, word2) {
    if (word1.length !== word2.length)
        return false;

    let frequencyCounter1 = {};

    for (let value of word1)
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
    
    for (let value of word2) {
        if (!frequencyCounter1[value])
            return false;
        else 
            frequencyCounter1[value] -= 1;
    }
    return true;
}

let word1 = 'anagram';
let word2 = 'nagrama';

console.log(isAnagram(word1,word2));