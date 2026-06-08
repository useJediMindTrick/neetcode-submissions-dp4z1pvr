class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {

        let longCommPref = "";

        for (let i=0; i < strs[0].length;i++){

            for (let j=0; j < strs.length; j++){

                if (i > strs[0].length || strs[j][i] !== strs[0][i]){
                    return longCommPref
                }
            }

            longCommPref += strs[0][i]
        }

        return longCommPref;
    }
}
