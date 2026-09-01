/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */ 

 var reverse = function(arr, i , j){

     while(i<j){
          let temp = arr[i];
          arr[i]  = arr[j];
          arr[j] = temp;
          i++
          j--
     }
 }

var rotate = function(nums, k) {  

    k = k % nums.length;
    reverse(nums, 0 , nums.length-1);
    reverse(nums, k , nums.length-1);
    reverse(nums, 0 ,k-1 );

    return nums
};


console.log(rotate(nums = [1,2,3,4,5,6,7], k = 3));

console.log('hello world');
