/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {

    let distinct = new Set();

    while(nums.length > 0){
        let min = Math.min(...nums);
        let max = Math.max(...nums);
        let avg = (min + max) / 2;
       
        distinct.add(avg);
        
        let minIndex = nums.indexOf(min);
      nums.splice(minIndex , 1);

        let maxIndex = nums.indexOf(max);
      nums.splice(maxIndex , 1);
     
      
    }

    
    return distinct.size
}; 

console.log(distinctAverages([4,1,4,0,3,5]));
console.log(distinctAverages([1,100]));

