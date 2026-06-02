class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {

        const seenNums = new Set();

        for (let i = 0; i <nums.length; i++){
            if (seenNums.has(nums[i])){
                return true;
            } else {
                seenNums.add(nums[i]);
            }
        }

        return false;
        
    }
}
