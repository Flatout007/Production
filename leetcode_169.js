/*
// 69. Majority Element
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let formula = nums.length / 2;
    let hash = {};
    
    
    for(let i in nums) {
        if(!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else hash[nums[i]] += 1;
    }
    
    for(let[k,v] of Object.entries(hash)) {
        if(v > formula) return k;
    }
    
};