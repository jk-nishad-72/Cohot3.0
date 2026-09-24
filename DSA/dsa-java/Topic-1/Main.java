class Mian { 
    public boolean canJump(int[] nums) {
        
        int maxReach = 0; // farthest index we can reach
        
        for (int i = 0; i < nums.length; i++) {
            
            // ❌ if current index is not reachable
            if (i > maxReach) {
                return false;
            }
            
            // ✅ update maxReach
            maxReach = Math.max(maxReach, i + nums[i]);
            
            // ✅ early exit (optional optimization)
            if (maxReach >= nums.length - 1) {
                return true;
            }
        }
        
        return true; // if loop completes, we can reach end
    }

    public static void main(String[] args) {
 
      int[] nums = {2,3,1,1,4};
      Mian mian = new Mian();
      System.out.println(mian.canJump(nums)); 
    }
}