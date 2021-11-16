/*
// 1614. Maximum Nesting Depth of the Parentheses[Easy]
A string is a valid parentheses string (denoted VPS) if it meets one of the following:
-It is an empty string "", or a single character not equal to "(" or ")",
-It can be written as AB (A concatenated with B), where A and B are VPS's, or
-It can be written as (A), where A is a VPS.
We can similarly define the nesting depth depth(S) of any VPS S as follows:
-depth("") = 0
-depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
-depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
-depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
For example, "", "()()", and "()(()())" are VPS's 
(with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.
Given a VPS represented as string s, return the nesting depth of s.

Example 1:
Input: s = "(1+(2*3)+((8)/4))+1"
Output: 3
Explanation: Digit 8 is inside of 3 nested parentheses in the string.
*/

/**
 * @param {string} s
 * @return {number}
 */
 var maxDepth = function(s) {
    let max = 0; 
    let stk = [];
    
    /*
    for i in s:
        push opening char's onto stk.
        record max length of stk so far to determine depth.
        if at anytime after, if s[i] is a closing char? Pop from stk.
    */
    
    for(let i in s) {
        if(s[i] === '(') {
            stk.push('(')
        }
        
        max = Math.max(max, stk.length);
        
        if(s[i] === ')') stk.pop();
    }
    
    return max;
};
