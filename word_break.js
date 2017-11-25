/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */


var wordBreak = function(s, wordDict) {
    var hasFound = [];
    hasFound[0] = true;
    var len = s.length;
    for (var i=1; i <= len; i++){
        for (var j=0; j <i; j++){
            if (hasFound[j] && wordDict.includes(s.substring(j,i))){
                hasFound[i] = true;
                break;
            }
        }
    }
    
    return hasFound[len] === true;
};
