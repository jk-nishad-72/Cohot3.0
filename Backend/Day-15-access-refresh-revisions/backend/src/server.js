
class Solution {
    reverseArray(arr) {
        // code here
        let i = 0;
        let j = arr.length-1;
        while (i < j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }

        return arr;
    }
}

let solution = new Solution()

let ans  = solution.reverseArray([1,2,3,4,5])

console.log(ans)