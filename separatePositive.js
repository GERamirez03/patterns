/**
 * Function that accepts an array of non-zero integers
 * and separates them by sign: positive integers to the
 * left, negative integers to the right.
 * 
 * The positives and negatives are grouped together but
 * not necessarily sorted.
 * 
 * This operation is done in-place; a copy of the input
 * array is NOT built.
 * 
 * Time Complexity: O(n)
 * 
 * Examples:
 * separatePositive([2, -1, -3, 6, -8, 10]) => [2, 10, 6, -3, -1, -8]
 * separatePositive([5, 10, -15, 20, 25])=>// [5, 10, 25, 20, -15]
 * separatePositive([-5, 5]) => [5, -5]
 * separatePositive([1, 2, 3]) => [1, 2, 3]
 */

function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        if(arr[left] < arr[right]) {
            // A larger number is on the right; move that to the left

            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            // Now, arr[left] has the bigger number, so we can keep checking the left side of the array
            left ++;
        } else {
            // if arr[left] > arr[right], then that means we have a smaller number on the right as we should
            // so, keep checking the right side of the array

            right --;
        }
    }
    return arr;
}