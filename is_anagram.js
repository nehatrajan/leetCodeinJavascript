/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length){
        return false;
    }
    for (var i=0; i < s.length; i++){
        var charPosition = t.indexOf(s[i]);
        if (charPosition < 0 || t.length === 0) {
            return false;
        } else {
            t = t.substring(0,charPosition) + t.substring(charPosition+1, t.length);
        }
    }
    return true;
};
