/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function(nums, k) {
    
    let map = new Map();
    
    for(let n of nums ){

        map.set(n , (map.get(n)||0 ) +1 );
        
    }

    let sum = 0;

    for(let [key , freq] of map){

          if(freq % k === 0){
            sum += key * freq
          }
    }

    return sum
};

console.log(sumDivisibleByK([1,2,3,4,5], k = 2));
console.log(sumDivisibleByK([1,2,2,3,3,3,3,4], k = 2));
console.log(sumDivisibleByK([4,4,4,1,2,3], k = 3));

