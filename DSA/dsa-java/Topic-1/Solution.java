class Solution {
    public int hIndex(int[] citations) {
        int n = citations.length;
        
        // step 1: sort array
        Arrays.sort(citations);
        
        // step 2: check condition
        for(int i = 0; i < n; i++) {
            int h = n - i;
            
            if(citations[i] >= h) {
                return h;
            }
        }
        
        return 0;
    }
}