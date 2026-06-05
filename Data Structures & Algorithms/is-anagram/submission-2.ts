class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        let sMap: Map<string,number> = new Map();
        let tMap: Map<string,number> = new Map();

        if (s.length !== t.length) return false;

        for (let i=0; i < s.length; i++){

            let currentS = s[i];
            let currentT = t[i];

            sMap.set(currentS, (sMap.get(currentS) ?? 0) + 1);
            tMap.set(currentT, (tMap.get(currentT) ?? 0) + 1);
        }

        for (const [char, count] of sMap){
            if (count !== tMap.get(char)) return false;
        }

        return true;

    }
}
