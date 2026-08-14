/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {

    
    let map = new Map();

    while(n > 0){

       let dig = n % 10;
       map.set(dig , (map.get(dig) || 0) + 1)
       n = Math.floor(n / 10) 

    }
 let sum = 0;
    for(let [key , values] of map){
       sum += key * values
    }
    
    console.log(map);
    return sum
    
};

console.log(digitFrequencyScore(122));
console.log(digitFrequencyScore(101));