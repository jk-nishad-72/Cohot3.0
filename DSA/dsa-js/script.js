/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function(nums) { 

    let map = new Map();

    for(let d of nums){

        map.set(d , (map.get(d) || 0) +1)
    }

   

   for(let [k,v] of map ){
      if(k%2===0 && v===1){
        return k
      }
   }
   return -1
    
    
};

console.log(firstUniqueEven(  [3,4,2,5,4,6]));
console.log(firstUniqueEven(   [4,4]));
