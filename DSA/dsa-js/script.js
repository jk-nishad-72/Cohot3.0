


class solution {

    addOne(nums){
 
         let sum = "";
         for(let n of nums){
             sum += n;
         }
         sum = parseInt(sum) + 1;

         let ans = [];

         while(sum > 0){
            let digit = sum % 10;
            ans.unshift(digit);
            sum = Math.floor(sum/10)
         }

         return ans
    }
}

const soln = new solution;

console.log(soln.addOne( [5, 6, 7, 8])); 

