class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        
        let prevMap:Map<number,number> = new Map();

        for (let idx=0; idx < nums.length; idx++){
            
            let diff = target - nums[idx];

            if (prevMap.has(diff)){
                return[prevMap.get(diff), idx]
            }

            prevMap.set(nums[idx],idx);
        }

        return [];
    }
}