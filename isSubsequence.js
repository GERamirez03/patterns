/**
 * Function which takes in two strings and
 * returns a boolean indicating whether the
 * first string forms a subsequence of the
 * second string without order changing.
 */

function isSubsequence(sub, str) {
    let subIdx = 0;
    let strIdx = 0;

    while(subIdx < sub.length) {
        if(sub[subIdx] === str[strIdx]) {
            subIdx++;
            strIdx++;
        } else {
            strIdx++;
        }
        if(strIdx >= str.length) return false;
    }
    return true;
}