/*
// 1863. Sum of All Subset XOR Totals[Easy]
The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.
For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.
Given an array nums, return the sum of all XOR totals for every subset of nums. 
Note: Subsets with the same elements should be counted multiple times.
An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.

Example 1:
Input: nums = [1,3]
Output: 6
Explanation: The 4 subsets of [1,3] are:
- The empty subset has an XOR total of 0.
- [1] has an XOR total of 1.
- [3] has an XOR total of 3.
- [1,3] has an XOR total of 1 XOR 3 = 2.
0 + 1 + 3 + 2 = 6
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var subsetXORSum = function(nums) {
    let subsets = {};
    let sum = 0;
    
    for(let byte = 0; byte < 2 ** nums.length; byte++) {
        subsets[byte] = [];
        for(let i = 0; i < nums.length; i++) {
            if(byte & (1 << i)) {
               subsets[byte].push(nums[i]);
            }   
        }
        
        sum += xorCal(subsets[byte]);
    }  
    
    return sum;
};

var xorCal = (arr) => {
    let result = 0;
    for(let i in arr) result ^= arr[i];
    return result;
};






