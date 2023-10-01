/**
 * Helper function to create a frequency counter map
 * of the chars in a given string.
 */

function createFrequencyCounter(str) {
    let frequencies = new Map();

    for(let char of str) {
        let charCount = frequencies.get(char) || 0;
        frequencies.set(char, charCount + 1);
    }

    return frequencies;
}

/**
 * Function that, given two positive integers,
 * returns a boolean indicating whether the
 * two numbers have the same frequency of 
 * digits.
 * 
 * Time Complexity: O(m + n)
 * where m and n are the lengths of the two
 * positive integers, respectively
 */

function sameFrequency(num1, num2) {
    const str1 = num1.toString();
    const str2 = num2.toString();
    if(str1.length !== str2.length) return false;

    const charMap1 = createFrequencyCounter(str1);
    const charMap2 = createFrequencyCounter(str2);
    if(charMap1.size !== charMap2.size) return false;

    for(let num of charMap1.keys()) {
        if(charMap1.get(num) !== charMap2.get(num)) return false;
    }

    return true;
}