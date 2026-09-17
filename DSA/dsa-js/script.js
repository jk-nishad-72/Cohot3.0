/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    maxSubarraySum(arr) {
        // Code here
        
        let sum = 0;
        let MAX_sum = 0;

        for(let i = 0;i<arr.length;i++){

            for(let j = i+1;j<arr.length;j++){
                 
                 sum += arr[j]; 

                 if(sum > MAX_sum){
                    MAX_sum = sum;
                 } else{
                    sum = 0;
                 }
            }
        }

        return MAX_sum;
    }
}

const slv = new Solution()
arr =  [2, 3, -8, 7, -1, 2, 3]
ans = slv.maxSubarraySum(arr)

console.log(ans);