function makeFreqCounter(str) {
    const freqCounter = {};
    for(let char of str) {
        freqCounter[char] = (freqCounter[char] + 1) || 1;
    }
    return freqCounter;
}

function isValidAnagram(str1, str2) {
    if(str1.length !== str2.length) return false;
    const str1Freq = makeFreqCounter(str1);
    const str2Freq = makeFreqCounter(str2);
    for(let char in str1Freq) {
        if(!str2Freq[char]) return false;
        if(str1Freq[char] !== str2Freq[char]) return false;
    }
    return true;
}