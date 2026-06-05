class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        let sMap:Map<string,number> = new Map();
        let tMap:Map<string,number> = new Map();

        if (s.length !== t.length) return false;

        for (let i = 0; i < s.length; i++){
            let currS = s[i];
            let currT = t[i];

            sMap.set(currS, (sMap.get(currS) ?? 0) + 1);
            tMap.set(currT, (tMap.get(currT) ?? 0) + 1);
        }

        for (const [char, count] of sMap){
            if (count !== tMap.get(char)) return false;            
        }

        return true;
    }
}
