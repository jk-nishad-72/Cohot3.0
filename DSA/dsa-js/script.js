/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    return haystack.indexOf(needle); 
};

console.log(strStr(haystack = "sadbutsad", needle = "sad"));
console.log(strStr(haystack = "leetcode", needle = "leeto"));

