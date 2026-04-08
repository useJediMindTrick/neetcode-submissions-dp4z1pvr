class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {

        console.log(nums)

        let maxConsOnes = 0;
        let currentMaxOnes = 0;

        for (const num of nums){
            currentMaxOnes = num === 1 ? currentMaxOnes + 1 : 0;
            maxConsOnes = Math.max(maxConsOnes, currentMaxOnes);
        }

        return maxConsOnes;
    }
}
