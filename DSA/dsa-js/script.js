/**
 * @param {string} s
 * @return {string}
 */

class solution{

     reverseWords(s) {
    
         let words = s.trim().split(".")
         let ans = [];

         for(let i = words.length-1 ;i >= 0;i--){
             if(words[i] != ""){
                ans.push(words[i]);
             }
         }
         return ans.join(".")
}; 

}

let ans = new solution();

console.log(ans.reverseWords("a.good...example"));