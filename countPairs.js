/**
 * Function which, given an array of integers and a number,
 * returns the number of pairs of integers within the array
 * which sum to the given number.
 * 
 * Assumes there are no duplicate values within the array.
 * 
 * Time Complexity: O(nlogn)
 */

function countPairs(nums, targetSum) {
    nums.sort((a, b) => a - b); // Sort by ascending

    let pairCount = 0;
    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        let currentSum = nums[left] + nums[right];

        if(currentSum === targetSum) {
            pairCount++;
            left++;
            right--;
        } else if(currentSum > targetSum) {
            // currentSum is too big, so check smaller numbers
            right--;
        } else {
            // currentSum < targetSum
            // currentSum is too small, so check bigger numbers
            left++;
        }
    }
    return pairCount;
}