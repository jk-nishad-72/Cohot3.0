/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    
        
      for(let i = 0 ;i< words.length ;i++){
         if(checkPalindrom(words[i])) return words[i]
      }

      return ""
};

var checkPalindrom = (word)=>{
 
   let i = 0;
   let j = word.length-1;

   while( i <= j ){

     if(word[i] !== word[j]) return false
     
      i++
      j--
   }


    return true

}

console.log(firstPalindrome(["abc","car","ada","racecar","cool"]));
console.log(firstPalindrome(["notapalindrome","racecar"])); 
console.log(firstPalindrome(["def","ghi"]));
