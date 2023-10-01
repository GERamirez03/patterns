/**
 * Helper function to create a frequency counter map
 * of the characters in a given string.
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
 * Function which accepts two strings, message and letters, and
 * returns a boolean indicating whether the message can be built
 * from the letters.
 * 
 * Assumes lowercase with no special characters
 * or spaces.
 * 
 * Time Complexity: O(m + n)
 * where m and n are the lengths of
 * the message and letters strings, respectively
 * 
 * Examples:
 * 
 * constructNote('aa', 'abc') // false
 * constructNote('abc', 'dcba') // true
 * constructNote('aabbcc', 'bcabcaddff') // true
 */

function constructNote(message, letters) {
    const messageCharMap = createFrequencyCounter(message);
    const lettersCharMap = createFrequencyCounter(letters);

    for(let char of messageCharMap.keys()) {
        if(!lettersCharMap.get(char)) return false;
        if(lettersCharMap.get(char) < messageCharMap.get(char)) return false;
    }

    return true;
}