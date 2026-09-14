

/**
 * Main
 */
public class Main {

      static int strStr(String haystack , String needle){

        return  haystack.indexOf(needle);
      }
     public static void main(String[] args) {
        
       int ans = strStr("sadbusted", "sad");
        System.out.println(ans);

        ans = strStr("leetcode","leeto" );

        System.out.println(ans);

     }
}