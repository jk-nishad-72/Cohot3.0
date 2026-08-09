/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    

   let inc = true;
   let dec = true;

   for(let i = 0 ;i<nums.length;i++){
        if(i>0 && nums[i]<nums[i-1]){
           inc = false; 
        }
        if(i>0 && nums[i]>nums[i-1]){
            dec = false; 
        } 
   }
   if(inc || dec)return true;  
   return false; 
}; 


console.log(isMonotonic([1,2,2,3]));
console.log(isMonotonic([6,5,4,4]));
console.log(isMonotonic([1,3,2]));
