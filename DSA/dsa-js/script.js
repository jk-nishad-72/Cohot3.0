/**
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var validDigit = function(n, x) {
    
    n = n.toString();
    
    
     if(n.startsWith(x.toString())){
        return false;
     }

    for(let i = 1; i < n.length; i++){
        if(n[i] == x){
            return true;
        }
    }
    return false;
};


console.log(validDigit(101 , 0));
console.log(validDigit(232 , 2));


