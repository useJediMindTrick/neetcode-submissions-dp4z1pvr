class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {

        let ans: number[] = [];
        let arrMultiplier: number = 2;

        for (let i = 0; i < arrMultiplier; i++){
            for (let j = 0; j < nums.length; j++){
                ans.push(nums[j]);
            }
        }

        return ans;
    }
}
