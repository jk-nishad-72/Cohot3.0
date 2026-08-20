/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    

    let temp = x;
    let sum = 0;

    while(x > 0){
        let dig = x % 10;
        sum += dig;
        x = Math.floor(x / 10);
    }

    return temp % sum == 0 ? sum : -1; 
};

console.log(sumOfTheDigitsOfHarshadNumber(18));
console.log(sumOfTheDigitsOfHarshadNumber(23));

