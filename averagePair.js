/**
 * Function which, given a sorted array of integers
 * and a target average, returns a boolean indicating
 * whether or not there is a pair of values in the
 * array whose average equals the target.
 * 
 * Time Complexity: O(n)
 */

function averagePair(nums, targetAvg) {
    if(nums.length < 2) return false;

    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        let currentAvg = (nums[left] + nums[right]) / 2;

        if (currentAvg === targetAvg) return true;
        else if (currentAvg > targetAvg) {
            // Average is too big => make it smaller by shifting right index leftwards
            right --;
        }
        else {
            // currentAve < targetAvg
            // Average is too small => make it bigger by shifting left index rightwards
            left ++;
        }
    }

    return false;
}