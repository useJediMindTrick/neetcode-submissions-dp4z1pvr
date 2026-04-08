class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {

        console.log(nums)

        let maxConsOnes = 0;
        let currentMaxOnes = 0;

        for (let i = 0; i < nums.length; i++){
            let currentNum = nums[i];
            if (currentNum === 1) {
                currentMaxOnes++;
                if (currentMaxOnes > maxConsOnes) maxConsOnes = currentMaxOnes;
            } else {
                currentMaxOnes = 0;
            }
        }

        return maxConsOnes;
    }
}
