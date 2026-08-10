/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    
     let map = new Map();

     for(let c of s){
      map.set(c , (map.get(c) || 0 )+ 1)
     }

   //   console.log(map);

      
       let set = new Set()
     for(let [key , values] of map){

       
       set.add(values)
      
     }
     
   //   console.log(set.size);
     
    return set.size === 1
};

console.log(areOccurrencesEqual("abcabc"));
console.log(areOccurrencesEqual("aaabb"));

