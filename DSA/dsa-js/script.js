/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function(nums) {
    
    let map = new Map();

    for( let n of nums){

      map.set(n , (map.get(n) || 0) + 1)
    }

    //  console.log(map);

     for(let [key , freq] of map){

               
       if(checkPrime(freq)) return true

     }
     

     return false
};

var checkPrime = (num)=>{

    if(num <= 1) return false;
    if(num === 2 ) return true;
    if(num %2 === 0)return false
     for(let i = 3 ; i <= Math.floor(Math.sqrt(num)) ;i += 2){

        if(num % i === 0){
          return false
        }
     }
    return true
}


console.log(checkPrimeFrequency([1,2,3,4,5,4]));
console.log(checkPrimeFrequency([1,2,3,4,5]));
console.log(checkPrimeFrequency([3,0,3,6,3,3]));


