// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function (nums) {
//     for (let index = 0; index < nums.length; index++) {
//         for (let innerIndex = 0; innerIndex < nums.length; innerIndex++) {
//             if (index != innerIndex) {
//                 if (nums[index] == nums[innerIndex]) return true;
//             }
//         }
//     }
//     return false;
// };
// console.log(containsDuplicate([2, 21, 2, 3, 4, 5]));

var containsDuplicate = function (nums) {
    let set = new Set();
    let sorted = nums.sort(function (a, b) { return a - b });
    for (let index = 0; index < sorted.length; index++) {
        if (set.has(sorted[index])) return true;
        set.add(nums[index]);
    }
    return false;
};

console.log(containsDuplicate([1, 222, 221, 12, 21, 2, 3, 4, 5]));