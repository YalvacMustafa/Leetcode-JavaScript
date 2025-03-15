/**
You are given an integer array nums, an integer k, and an integer multiplier.
You need to perform k operations on nums. In each operation:
Find the minimum value x in nums. If there are multiple occurrences of the minimum value, select the one that appears first.
Replace the selected minimum value x with x * multiplier.
After the k operations, apply modulo 109 + 7 to every value in nums.
Return an integer array denoting the final state of nums after performing all k operations and then applying the modulo.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    for (let i = 0; i < k; i++){
        let minIndex = nums.indexOf(Math.min(...nums))
        nums[minIndex] *= multiplier;
    }

    for (let i = 0; i < nums.length; i++){
        nums[i] %= 1000000007;
    }
    return nums;
};